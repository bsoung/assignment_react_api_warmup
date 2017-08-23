import React, { Component } from "react";
import UserCard from "./UserCard";

const UserList = ({ users, isFetching, onDelete }) => {
  const onClickDelete = (index, e) => {
    onDelete(index);
  };

  const userList = users.map(user => <UserCard user={user} key={user.id} />);

  console.log(userList, "userList");

  // card-group is the layout wrapper for Bootstrap
  // 4 cards
  return (
    <div className="container">
      <h1>User List</h1>
      <div className="card-group">
        {isFetching ? <p> Loading</p> : userList}
      </div>
    </div>
  );
};

export default UserList;
