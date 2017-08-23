import React, { Component } from "react";
import UserCard from "./UserCard";

const UserList = ({ users, isFetching, remove, edit, editFlag, fetchEdit }) => {
  const onClickDelete = index => {
    remove(index);
  };

  const onClickEdit = index => {
    edit(index);
  };

  const onClickFetchEdit = (index, e) => {
    e.preventDefault();
    fetchEdit(index);
  };

  const userList = users.map((user, index) =>
    <div key={user.id}>
      <UserCard user={user} key={user.id} editFlag={editFlag} />
      <a onClick={onClickDelete.bind(this, index)}>delete</a>
      <br />
      <a onClick={onClickEdit.bind(this, index)}>edit</a>
      <br />
      {editFlag !== user.id
        ? ""
        : <form>
            <label htmlFor="form">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder={user.first_name}
              required="required"
            />
            <label htmlFor="form">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder={user.last_name}
              required="required"
            />

            <button onClick={onClickFetchEdit.bind(this, index)}>Submit</button>
          </form>}
    </div>
  );

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

// <label htmlFor="form">Avatar URL</label>
// <input type="text" name="avatar" placeholder={user.avatar} />
