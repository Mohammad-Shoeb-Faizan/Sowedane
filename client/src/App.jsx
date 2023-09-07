import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import EditProfile from "./components/profile/EditProfile";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
