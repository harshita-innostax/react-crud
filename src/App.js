import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Register from "./components/screens/Register";
import { Posts } from "./components/screens/Posts";
import FileUpload from "./components/screens/FileUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/:sno" element={<Register />} />
        <Route path="/api" element={<Posts />} />
        <Route path="/uploadfiles" element={<FileUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
