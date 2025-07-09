import React from "react";

const Profile = ({ user, darkMode }) => {
  if (!user) return <p>Loading profile...</p>;

  const cardStyle = {
    background: darkMode ? "#1e1e1e" : "#fff",
    border: "1px solid",
    borderColor: darkMode ? "#444" : "#ddd",
    borderRadius: 12,
    padding: "24px",
    boxShadow: darkMode
      ? "0 4px 12px rgba(0, 0, 0, 0.4)"
      : "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: 500,
    margin: "0 auto",
    fontFamily: "'Segoe UI', sans-serif",
    color: darkMode ? "#eee" : "#222",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: darkMode ? "#ccc" : "#555",
    minWidth: "100px",
    display: "inline-block",
  };

  const rowStyle = {
    marginBottom: "10px",
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ marginBottom: 16 }}>User Profile</h3>
      <div style={rowStyle}>
        <span style={labelStyle}>Name:</span> {user.name}
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>Email:</span> {user.email}
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>Phone:</span> {user.phone}
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>Website:</span>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: darkMode ? "#90caf9" : "#0078d4" }}
        >
          {user.website}
        </a>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>Company:</span> {user.company?.name}
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>Address:</span> {user.address?.suite},{" "}
        {user.address?.street}, {user.address?.city}
      </div>
    </div>
  );
};

export default Profile;
