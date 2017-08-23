import React, { Component } from "react";
//import JumbotronFluid from './elements/JumbotronFluid'
import UserList from "./UserList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      deleteFlag: 0,
      isFetching: false
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });

    fetch("https://reqres.in/api/users?delay=3")
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

    this.setState({
      users: copy
    });
  };

  render() {
    const { users, isFetching } = this.state;
    return (
      <div className="App">
        <UserList
          users={users}
          isFetching={isFetching}
          onDelete={this.onDelete}
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
