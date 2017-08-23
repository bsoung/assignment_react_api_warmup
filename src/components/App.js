import React, { Component } from "react";
//import JumbotronFluid from './elements/JumbotronFluid'
import UserList from "./UserList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      editFlag: 0,
      isFetching: false
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });

    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(json => {
        console.log(json, "?????");
        this.setState({
          users: json.data,
          isFetching: false
        });
      });
  }

  onDelete = index => {
    let copy = [...this.state.users];

    copy = copy.filter(u => copy[index] !== u);

    fetch(`https://reqres.in/api/users/${index}`, { method: "delete" })
      .then(res => {
        console.log(res.status);

        if (res.status === 204) {
          this.setState({
            users: copy
          });
        }
      })
      .catch(e => {
        console.error(e.stack);
      });
  };

  onEdit = index => {
    let copy = [...this.state.users];

    let user = copy[index];

    console.log("App.js line 55: user: ", user,"editFlag: ", this.state.editFlag, "userId: ", user.id);

    this.setState({
      editFlag: user.id
    });
  };

  onFetchEdit = index => {

    fetch(`https://reqres.in/api/users/${index}`, { method: "put" })
      .then(response => {
        if (response.status === 200) {
          response.json()
        }
      })
      .then(json => {
        this.setState({
            users: json.data
          });
      })
      .catch(e => {
        console.error(e.stack);
      });
  }

  render() {
    const { users, isFetching, editFlag } = this.state;
    return (
      <div className="App">
        <UserList
          users={users}
          isFetching={isFetching}
          editFlag={editFlag}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
          onFetchEdit={this.onFetchEdit}
        />
      </div>
    );
  }
}

export default App;

// <JumbotronFluid
//          heading="User CRUD"
//          lead="Using an API for User CRUD operations"
//        />
