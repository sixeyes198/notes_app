import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

// const routes = (
//   <Router>
//     <Routes>
//     <Route path="*" element={<Navigate to="/signup" />} />
//       <Route path="/dashboard" exact element={<Home />} />
//       <Route path="/login" exact element={<Login />} />
//       <Route path="/signup" exact element={<SignUp />} />
//     </Routes>
//   </Router>
// );

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/signup" />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
