import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../Components/Profile";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const myProfile = {
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: { name: "Romaguera-Crona" },
      address: {
        suite: " Apt. 556",
        street: " Kulas Light",
        city: " Gwenborough",
      },
    };

    setUser(myProfile);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Profile Page</h2>

      {user && <Profile user={user} />}

      <button
        type="button"
        onClick={() => navigate("/")}
        style={{ marginTop: 20 }}
      >
        ← Back to Dashboard
      </button>

      <p
        style={{
          marginTop: 30,
          fontStyle: "italic",
          color: "#666",
          textAlign: "center",
        }}
      >
        Designed and developed by <strong>Leanne </strong>, Serilingampalli,
        India
      </p>
    </div>
  );
};

export default ProfilePage;
