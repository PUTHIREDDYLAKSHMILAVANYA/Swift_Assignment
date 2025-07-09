import Footer from "../Components/Footer";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../Components/Profile";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the first user from the dummy users API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data[0]))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Profile Page</h2>
      <Profile user={user} />
      <button onClick={() => navigate("/")} style={{ marginTop: 20 }}>
        ← Back to Dashboard
      </button>
    </div>
  );
};

export default ProfilePage;

<Footer />;
