import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function CarpoolDetail() {
  const params = useParams();
  const navigate = useNavigate();

  const [carpools, setCarpools] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showCarpoolers, setShowCarpoolers] = useState(false);

  const [form, setForm] = useState({
    name: "",
    age: "",
    phoneNumber: "",
  });

  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchCarpools() {
      const response = await axios.get(
        `https://webdev103.cyclic.app/penaestrada/${params.id}`
      );
      setCarpools(response.data);
    }
    fetchCarpools();
  }, [reload]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //é put ou post??
      const response = await axios.put(
        `https://webdev103.cyclic.app/penaestrada/${params.id}`,
        { people: [...carpools.people, form] }
      );
      setReload(!reload);

      setForm({
        name: "",
        age: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Detalhes da carona:</h1>
      <h2>
        {" "}
        Trajeto: {carpools.whereFrom} - {carpools.whereTo}
      </h2>
      <p>Motorista: {carpools.user}</p>
      <p>Horário de saída: {carpools.departureTime}</p>
      <p>Ponto de encontro: {carpools.meetingPlace}</p>
      <p>Preço por pessoa: {carpools.price}</p>
      <p>Quantos viajantes? {carpools.capacity}</p>
      <p>Veículo: {carpools.carModel}</p>
      <p>Motorista verificado: {carpools.verifiedDriver}</p>

      <button onClick={() => setShowCarpoolers(!showCarpoolers)}>
        Caroneiros confirmados
      </button>
      {showCarpoolers === true && (
        <div>
          {carpools.people &&
            carpools.people.map((person) => {
              return (
                <div key={person.person}>
                  <p>Nome: {person.name}</p>
                  <p>Idade: {person.age}</p>
                  <p>Telefone: {person.phoneNumber}</p>
                </div>
              );
            })}
        </div>
      )}
      <button onClick={() => setShowForm(!showForm)}>Pegar essa carona!</button>
      {showForm === true && (
        <form>
          <label>Nome:</label>
          <input
            type="text"
            name="user"
            value={form.name}
            onChange={handleChange}
            placeholder="Preencha seu nome..."
          />

          <label>Idade:</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Sua idade..."
          />

          <label>Telefone de contato:</label>
          <input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Seu telefone..."
          />
          <button onClick={handleSubmit}>Enviar pedido</button>
        </form>
      )}
    </div>
  );
}
