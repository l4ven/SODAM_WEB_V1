import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./pages/Main/Home/UserHome/Home";
import SellerHome from "./pages/Main/Home/SellerHome/Home";
import Login from "./pages/Users/Login/Login";
import Landing from "./pages/Main/Landing/Landing";
import UserSignUp from "./pages/Users/SignUp/User/SignUp";
import SellerSignUp from "./pages/Users/SignUp/Seller/SingUp";
import PostDetail from "./components/Post/PostDetail/PostDetail";
import UserMyPage from "./pages/Users/MyPage/User/MyPage";
import SellerMypage from "./pages/Users/MyPage/Seller/MyPage";
import Write from "./pages/Users/Write/Write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/userHome" element={<UserHome />} />
        <Route path="/userMyPage" element={<UserMyPage />} />
        <Route path="/userSignUp" element={<UserSignUp />} />
        <Route path="/product/:id" element={<PostDetail />} />

        <Route path="/sellerHome" element={<SellerHome />} />
        <Route path="/sellerMyPage" element={<SellerMypage />} />
        <Route path="/sellerSignUp" element={<SellerSignUp />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
