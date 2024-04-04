import { Routes, Route } from "react-router-dom";

// Páginas do Projeto
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile"
import Blog from "./pages/blog/Blog"
import Search from "./pages/search/Search";
import Header from "./ui/components/header/Header"
import Users from "./pages/users/Users";
import EmailVerify from "./pages/EmailVerify/EmailVerify";

// Components and Hooks
import PrivateRoute from "./data/hooks/auth/PrivateRoute";

function App() {
  return (
    <>
      <Header/>
      <main className="">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/students" element={<Users/>}/>
          <Route path="/auth/:id/verify/:token" element={<EmailVerify/>}/>
          <Route element={<PrivateRoute/>}>
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
