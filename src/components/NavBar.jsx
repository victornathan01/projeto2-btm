import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <img height={200} src="/src/assets/logo branco.png" />
        <span>Home</span>
      </Link>
    </div>
  );
}

