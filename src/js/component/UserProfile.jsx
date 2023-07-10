import React from "react";

/**
 * Identificar los props
 * name, description, username
 */

const UserProfile = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.username}</p>
    </>
  );
};

export default UserProfile;
