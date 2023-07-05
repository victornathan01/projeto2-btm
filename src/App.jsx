import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CarpoolDetail from "./pages/CarpoolDetail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carona/:id" element={<CarpoolDetail />} />
      </Routes>
      
    </div>
  );
}

export default App;
