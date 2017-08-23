import React, {Component} from 'react'
import UserCard from './UserCard'

const UserList =({users, isFetching})=> {
  
    const userList = users.map((user)=>{
      <UserCard user={user} key={user.id} />
    })

  // componentDidMount() {
  //   this.setState({isFetching: true})
  //   // After component mounts, call the API to get the
  //   // users, then update state which triggers re-render
  //   fetch('https://reqres.in/api/users?delay=3')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       this.setState({
  //         users: json.data,
  //         isFetching: false,
  //       })
  //     })
  // }

  // render() {
  //   const {users, isFetching} = this.state
  //   // Generate the UserCard for each user
  //   const userList = users.map((user) =>
  //     <UserCard user={user} key={user.id} />
  //   )

    // card-group is the layout wrapper for Bootstrap
    // 4 cards
    return (
      <div className="container">
        <h1>User List</h1>
        <div className="card-group">
          {isFetching ? <p> Loading</p> : userList}
        </div>
      </div>
    )
}

export default UserList
