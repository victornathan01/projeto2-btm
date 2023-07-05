import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <img height={140} src="/src/assets/bluecar.jpeg" />
        <p>Pé na estrada</p>
      </Link>
      <p>
                <Link to="/criar">Ofereça uma carona</Link>
            </p>
    </div>
  );
}

