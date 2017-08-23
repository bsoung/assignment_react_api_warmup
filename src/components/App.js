import React, { Component } from "react";
//import JumbotronFluid from './elements/JumbotronFluid'
import UserList from "./UserList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      selectedUserID: null,
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

    console.log(user, "????");

    this.setState({
      editFlag: 1,
      selectedUserID: user.id
    });
  };

  render() {
    const { users, isFetching, editFlag, selectedUserID } = this.state;
    return (
      <div className="App">
        <UserList
          users={users}
          selectedUserID={selectedUserID}
          isFetching={isFetching}
          editFlag={editFlag}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
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
