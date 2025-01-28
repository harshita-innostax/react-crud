import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Components/Register";
import "./App.css";
import { Posts } from "./Components/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/:sno" element={<Register />} />
        <Route path="/apicoming" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
