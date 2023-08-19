// src/components/Profile.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users/${user.id}`
        );
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, [user.id]);

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {profileData ? (
        <div>
          <p>ID: {profileData.id}</p>
          <p>Name: {`${profileData.firstName} ${profileData.lastName}`}</p>
          <p>Email: {profileData.email}</p>
          <p>Phone: {profileData.phone}</p>
          {/* Add more profile details here */}
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default Profile;
