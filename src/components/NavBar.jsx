import { Link } from "react-router-dom";
import logo from "../assets/bluecar.jpeg";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-white">
      <Link className="flex items-center gap-3" to="/">
        <img className="h-16" src={logo} />
        <p className="text-yellow-600">Pé na estrada</p>
      </Link>

      <p>
        <Link className="text-[#85edc0]" to="/criarcarona">
          Ofereça uma carona
        </Link>
      </p>
    </div>
  );
}
