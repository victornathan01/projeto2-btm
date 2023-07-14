import { Link } from "react-router-dom";
import logo from "../assets/bluecar.jpeg";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-[#f6f6f6] w-full p-3">
      <div className="flex items-center justify-between bg-[#f6f6f6] w-full p-3">
  <Link className="flex items-center gap-3" to="/">
    <img className="h-20" src={logo} />
    <div>
      <p className="text-yellow-600 font-love-ya-like-a-sister font-extrabold text-6xl">Pé na estrada</p>
      <p className="text-1xl text-yellow-600 text-center">Chegue ao seu destino em poucos cliques</p>
    </div>
  </Link>
</div>

      <p className= "text-center">
        <Link className="text-blue-900 hover:text-yellow-600 text-center text-2xl" to="/criarcarona">
          Ofereça uma carona aqui
        </Link>
      </p>
    </div>
  );
}
