import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CarpoolDetail from "./pages/CarpoolDetail";
import PostCarpool from "./pages/PostCarpool";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-background min-h-screen font-sans px-7 pb-14">
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
