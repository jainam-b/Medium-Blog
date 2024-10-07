import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
import Profile from "./pages/Profile";
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />}  />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Blogs/>} />
          <Route path="/blog/:id" element={<Blog />} />
          
          <Route path="/publish" element={<Publish />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
