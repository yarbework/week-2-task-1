import React from "react";

const GroupMembersList = ({ members }) => {
  return (
    <div>
      <h2>Group members</h2>
      <ul>
        {members.map((members, index) => (
          <li key={index}>{members.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default GroupMembersList;
