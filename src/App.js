import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import { Posts } from "./Components/Posts";
import FileUpload from "./Components/FileUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/:sno" element={<Register />} />
        <Route path="/api" element={<Posts />} />
        <Route path="/uploadfiles" element={<FileUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
