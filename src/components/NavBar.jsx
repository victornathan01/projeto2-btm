import { Link } from "react-router-dom";
import logo from "../assets/bluecar.jpeg";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-[#f6f6f6] ">
      <Link className="flex items-center gap-3" to="/">
        <img className="h-16" src={logo} />
        <p className="text-yellow-600 font-love-ya-like-a-sister font-extrabold text-5xl">Pé na estrada</p>
      </Link>

      <p>
        <Link className="text-[rgb(12 67 110)]" to="/criarcarona">
          Ofereça uma carona
        </Link>
      </p>
    </div>
  );
}
