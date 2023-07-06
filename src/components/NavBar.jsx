import { Link } from "react-router-dom";
import logo from "../assets/bluecar.jpeg"

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <img height={140} src={logo} />
        <p>Pé na estrada</p>
      </Link>
      <p>
                <Link to="/criar">Ofereça uma carona</Link>
            </p>
    </div>
  );
}

