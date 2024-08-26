import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./pages/Main/Home/UserHome/Home";
import Login from "./pages/Users/Login/Login";
import Landing from "./pages/Main/Landing/Landing";
import UserSignUp from "./pages/Users/SignUp/User/SignUp";
import SellerSignUp from "./pages/Users/SignUp/Seller/SingUp";
import PostDetail from "./components/Post/PostDetail/PostDetail";
import MyPage from "./pages/Users/MyPage/User/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/userHome" element={<UserHome />} />
        <Route path="/userMyPage" element={<MyPage />} />
        <Route path="/userSignUp" element={<UserSignUp />} />
        <Route path="/product/:id" element={<PostDetail />} />

        <Route path="/sellerSignUp" element={<SellerSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
