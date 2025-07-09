import React from "react";

const Profile = ({ user }) => {
  if (!user) return <p>Loading user profile...</p>;

  return (
    <div style={styles.container}>
      <h3>👤 User Profile</h3>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Company:</strong> {user.company?.name}
      </p>
      <p>
        <strong>Address:</strong>{" "}
        {`${user.address?.suite}, ${user.address?.street}, ${user.address?.city}`}
      </p>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    marginTop: "20px",
  },
};

export default Profile;
