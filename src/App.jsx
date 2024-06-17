import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
// students components
import StudentsLayout from "./templates/Layout/students/StudentsLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Student routes */}
        <Route path="/students/dashboard" element={<StudentsLayout />} />
        {/* Admin routes */}

        {/* Proctor routes */}
      </Routes>
    </Router>
  );
}

export default App;
