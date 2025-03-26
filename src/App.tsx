import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f5f5]">
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/help" element={<div className="pt-[7vh]">Help Page</div>} />
          <Route path="/contact" element={<div className="pt-[7vh]">Contact Page</div>} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
