import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./pages/Main/Home/UserHome/Home";
import UserLogin from "./pages/Users/Login/UserLogin/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/userHome" element={<UserHome />} />
        <Route path="/userLogin" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
