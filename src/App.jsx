import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
