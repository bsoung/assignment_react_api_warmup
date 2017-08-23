import React, { Component } from "react";
import UserCard from "./UserCard";

const UserList = ({
  users,
  isFetching,
  onDelete,
  onEdit,
  editFlag,
  onFetchEdit
}) => {
  const onClickDelete = (index, e) => {
    onDelete(index);
  };

  const onClickEdit = (index, e) => {
    onEdit(index);
//    console.log(editFlag, )
  };

  const userList = users.map((user, index) =>
    <div key={user.id}>
      <UserCard
        user={user}
        key={user.id}
        editFlag={editFlag}
      />
      <a onClick={onClickDelete.bind(this, index)}>delete</a>
      <br />
      <a onClick={onClickEdit.bind(this, index)}>edit</a>
      <br />
      {editFlag !== user.id
        ? ""
        : <form>
            <label htmlFor="form">First Name</label>
            <input type="text" name="form" placeholder={user.first_name} />
            <label htmlFor="form">Last Name</label>
            <input type="text" name="form"  placeholder={user.last_name}/>
            <label htmlFor="form">Avatar URL</label>
            <input type="text" name="form" placeholder={user.avatar} />
            <button onClick={onFetchEdit.bind(this, index)}>Submit</button>
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
