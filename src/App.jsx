import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CarpoolDetail from "./pages/CarpoolDetail";
import PostCarpool from "./pages/PostCarpool";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <NavBar />
      <Toaster/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/criarcarona" element={<PostCarpool />} />
        <Route path="/carona/:id" element={<CarpoolDetail />} />
      </Routes>
    </div>
  );
}

export default App;
