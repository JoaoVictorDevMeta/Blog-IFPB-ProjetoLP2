import { Routes, Route } from "react-router-dom";

// Páginas do Projeto
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile"
import Blog from "./pages/blog/Blog"
import Search from "./pages/search/Search";
import Navbar from "./ui/partials/Navbar"

// Components and Hooks
import PrivateRoute from "./data/hooks/auth/PrivateRoute";

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
