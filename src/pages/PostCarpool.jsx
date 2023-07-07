import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PostCarpool() {
  const [form, setForm] = useState({
    user: "",
    whereFrom: "",
    whereTo: "",
    departureTime: "",
    meetingPlace: "",
    capacity: "",
    price: "",
    carModel: "",
    people: [],
    verifiedDriver: false,
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("https://webdev103.cyclic.app/penaestrada", form);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Cadastre sua carona:</h1>
      <form>
        <label>Nome: </label>
        <input
          type="text"
          name="user"
          value={form.user}
          onChange={handleChange}
        />

        <label>Origem: </label>
        <input
          type="text"
          name="whereFrom"
          value={form.whereFrom}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Postar carona</button>
      </form>
    </div>
  );
}
