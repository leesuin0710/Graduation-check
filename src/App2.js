import { Route, Routes } from "react-router-dom";
import "./App2.css";
import Home from "./routes/Home2";
import Login from "./routes/Login2";
import Signup from "./routes/Signup2";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
