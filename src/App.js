import ProfilePage from "./pages/ProfilePage";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />

      <Route path="/profile" element={<ProfilePage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
