import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./pages/Main/Home/UserHome/Home";
import Login from "./pages/Users/Login/Login";
import Landing from "./pages/Main/Landing/Landing";
import UserSignUp from "./pages/Users/SignUp/User/SignUp";
import SellerSignUp from "./pages/Users/SignUp/Seller/SingUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/userHome" element={<UserHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userSignUp" element={<UserSignUp />} />
        <Route path="/sellerSignUp" element={<SellerSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
