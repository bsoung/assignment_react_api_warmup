import React, { Component } from "react";
import UserCard from "./UserCard";

const UserList = ({ users, isFetching, onDelete }) => {
  const onClickDelete = (index, e) => {
    onDelete(index);
  };

  const userList = users.map((user, index) => <div key={user.id}><UserCard user={user} key={user.id} /><a onClick={onClickDelete.bind(this, index)}>delete</a></div>);


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
