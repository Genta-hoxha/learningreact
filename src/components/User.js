import React from "react";

const User = ({ name, email }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Email: {email}</p>
    </div>
  );
};

export default User;
