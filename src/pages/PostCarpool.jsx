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
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex">
      <h1>Cadastre sua carona:</h1>
      <form>
        <label>Motorista: </label>
        <input
          type="text"
          name="user"
          value={form.user}
          onChange={handleChange}
        />

        <label>Ponto de origem: </label>
        <input
          type="text"
          name="whereFrom"
          value={form.whereFrom}
          onChange={handleChange}
        />
        <label>Destino: </label>
        <input
          type="text"
          name="whereTo"
          value={form.whereTo}
          onChange={handleChange}
        />
        <label>Hora de saída: </label>
        <input
          type="number"
          name="departureTime"
          value={form.departureTime}
          onChange={handleChange}
        />
        <label>Ponto de encontro: </label>
        <input
          type="text"
          name="meetingPlace"
          value={form.meetingPlace}
          onChange={handleChange}
        />
        <label>Vagas disponíveis: </label>
        <input
          type="number"
          name="capacity"
          value={form.capacity}
          onChange={handleChange}
        />
        <label>Preço por pessoa:</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
        />

        <label>Preço por pessoa:</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <label>Modelo do veículo:</label>
        <input
          type="text"
          name="carModel"
          value={form.carModel}
          onChange={handleChange}
        />
        <label>Motorista verificado?</label>
        <input
          type="boolean"
          name="verifiedDriver"
          value={form.verifiedDriver}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Postar carona</button>
      </form>
    </div>
  );
}
