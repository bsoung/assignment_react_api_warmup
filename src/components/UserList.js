import React, { Component } from "react";
import UserCard from "./UserCard";

const UserList = ({
  users,
  isFetching,
  onDelete,
  onEdit,
  editFlag,
  selectedUserID
}) => {
  const onClickDelete = (index, e) => {
    onDelete(index);
  };

  const onClickEdit = (index, e) => {
    onEdit(index);
  };

  const userList = users.map((user, index) =>
    <div key={user.id}>
      <UserCard
        user={user}
        key={user.id}
        editFlag={editFlag}
        selectedUserID={selectedUserID}
      />
      <a onClick={onClickDelete.bind(this, index)}>delete</a>
      <br />
      <a onClick={onClickEdit.bind(this, index)}>edit</a>
      <br />
      {editFlag === 0 && user.id === selectedUserID
        ? ""
        : <form>
            <label htmlFor="form" />
            <input type="text" name="form" />
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
