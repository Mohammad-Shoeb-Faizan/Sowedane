// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Profile() {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({});
//   const [loading, setLoading] = useState(true);

//   async function fetchUserData() {
//     setLoading(false);
//   }

//   fetchUserData();

//   const handleEditProfile = () => {
//     // Navigate to the edit profile page
//     navigate("/editprofile");
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>My Profile</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <div style={profileStyle}>
//             <h2>{userData.fullName}</h2>
//             <p>Email: {userData.email}</p>
//             <p>Phone: {userData.phone}</p>
//             <p>Address: {userData.address}</p>
//             <p>Company Name: {userData.companyName}</p>
//           </div>
//           <button onClick={handleEditProfile} style={editButtonStyle}>
//             Edit Profile
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// // Inline CSS styles
// const profileStyle = {
//   border: "1px solid #ddd",
//   padding: "20px",
//   borderRadius: "10px",
//   margin: "20px",
// };

// const editButtonStyle = {
//   backgroundColor: "blue",
//   color: "white",
//   padding: "10px 20px",
//   borderRadius: "10px",
//   cursor: "pointer",
//   marginTop: "20px",
// };

// export default Profile;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const response = await fetch("http://localhost:3000/api/get-user-profile", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             // Include any authentication headers if needed (e.g., JWT token)
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch user data");
//         }

//         const data = await response.json();
//         setUserData(data);

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         // Handle errors gracefully, e.g., show an error message
//       }
//     }

//     fetchUserData();
//   }, []);

useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("http://localhost:3000/api/get-user-profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Include any authentication headers if needed (e.g., JWT token)
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setUserData(data);
  
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle errors gracefully, e.g., show an error message to the user
      }
    }
  
    fetchUserData();
  }, []);
  

  const handleEditProfile = () => {
    // Navigate to the edit profile page
    navigate("/editprofile");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div style={profileStyle}>
            <h2>{userData.fullName}</h2>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Address: {userData.address}</p>
            <p>Company Name: {userData.companyName}</p>
          </div>
          <button onClick={handleEditProfile} style={editButtonStyle}>
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}

// Inline CSS styles
const profileStyle = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "10px",
  margin: "20px",
};

const editButtonStyle = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px 20px",
  borderRadius: "10px",
  cursor: "pointer",
  marginTop: "20px",
};

export default Profile;
