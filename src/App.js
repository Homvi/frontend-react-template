import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserSpecificPage from "./pages/UserSpecificPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/user" element={<UserSpecificPage />} />
    </Routes>
  );
};

export default App;
