// src/App.js
import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      {user ? <Profile user={user} /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
