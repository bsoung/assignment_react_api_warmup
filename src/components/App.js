import React, { Component } from "react";
//import JumbotronFluid from './elements/JumbotronFluid'
import UserList from "./UserList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      editFlag: 0,
      isFetching: false,
      updatedAt: null
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });

    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json.data,
          isFetching: false
        });
      });
  }

  remove = index => {
    let copy = [...this.state.users];

    copy = copy.filter(u => copy[index] !== u);

    fetch(`https://reqres.in/api/users/${index}`, { method: "delete" })
      .then(res => {
        console.log(res.status);

        if (res.status === 204) {
          this.setState({
            users: copy
          });
          alert("User deleted!");
        }
      })
      .catch(e => {
        console.error(e.stack);
      });
  };

  edit = index => {
    let copy = [...this.state.users];

    let user = copy[index];

    this.setState({
      editFlag: user.id
    });
  };

  fetchEdit = (index, e) => {
    let copy = [...this.state.users];

    let user = copy[index];

    fetch(`https://reqres.in/api/users/${index}`, { method: "put" })
      .then(res => {
        if (res.status !== 200) {
          throw new Error(res.status);
        }

        return res.json();
      })
      .then(json => {
        console.log(json.updatedAt, "??");
        this.setState({
          updatedAt: json.updatedAt,
          users: copy
        });
        alert(`Updated at ${this.state.updatedAt}!`);
      })
      .catch(e => {
        console.error(e.stack);
      });
  };

  render() {
    const { users, isFetching, editFlag } = this.state;
    return (
      <div className="App">
        <UserList
          users={users}
          isFetching={isFetching}
          editFlag={editFlag}
          remove={this.remove}
          edit={this.edit}
          fetchEdit={this.fetchEdit}
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
