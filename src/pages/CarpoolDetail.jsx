import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
      toast.success("Carona reservada com sucesso!");
      setShowCarpoolers(true);
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado");
    }
  }

  async function handleDelete(e) {
    try {
      await axios.delete(
        `https://webdev103.cyclic.app/penaestrada/${params.id}`
      );
      navigate("/");
      toast.success("Carona deletada com sucesso.");
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado");
    }
  }

  return (
    <div className="py-8">
      <h1 className="font-bold text-2xl">Detalhes da carona:</h1>
      <h2>
        {" "}
        <strong>Trajeto:</strong> {carpools.whereFrom} - {carpools.whereTo}
      </h2>
      <p><strong>Motorista:</strong> {carpools.user}</p>
      <p><strong>Horário de saída:</strong> {carpools.departureTime}</p>
      <p><strong>Ponto de encontro:</strong> {carpools.meetingPlace}</p>
      <p><strong>Preço por pessoa:</strong> {carpools.price}</p>
      <p><strong>Quantos viajantes?</strong> {carpools.capacity}</p>
      <p><strong>Veículo:</strong> {carpools.carModel}</p>
      <p><strong>Motorista verificado:</strong> {carpools.verifiedDriver ? "✅" : "❌"}</p>

      <button className="text-blue-900 hover:text-yellow-600 text-center text-xl font-bold pt-2" onClick={() => setShowCarpoolers(!showCarpoolers)}>
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
  <div>
      {!(carpools.people?.length >= carpools.capacity) && (
        
       <div className="pt-4 pb-2"><button className="hover:bg-blue-500 bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={() => setShowForm(!showForm)}>
          Pegar essa carona! 👍🏽
        </button></div> 
      )}

      {carpools.people?.length >= carpools.capacity && (
        <h2 className="text-2xl text-yellow-600 underline py-2 pb-6">Essa carona já está cheia!</h2>
      )}
</div>
      {showForm === true && (
        <form>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
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
          <div className="pt-3">
          <button className="hover:bg-blue-500 bg-blue-900 text-white font-bold p-2 px-4 rounded" onClick={handleSubmit}>Enviar pedido</button>
       </div>
       </form>
      )}

      <div className="pt-20"><button className="hover:bg-blue-500 bg-blue-900 text-white font-bold p-2 px-4 rounded" onClick={handleDelete}>Deletar carona 🗑️</button>
    </div>
    </div>
  );
}
