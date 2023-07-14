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
    <div className=" flex-col inline-flex shadow-md px-8 pt-4 pb-8">
      <h1 className="text-lg  font-semibold">Cadastre sua carona</h1>
      <div>
      <form>
        <div className="mb-2">
          <label className="inline-block font-medium text-blue-900">
            {" "}
            Motorista:{" "}
          </label>
          <input
            className="bg-gray-100 text-blue-900 text-sm rounded-lg placeholder-gray-400  block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-300 dark:text-white "
            type="text"
            name="user"
            value={form.user}
            placeholder="João..."
            onChange={handleChange}
          />
        </div>
        <div className="flex space-x-3 mb-2">
          <label className="inline-block font-medium text-blue-900">
            Ponto de origem:{" "}
          </label>
          <input
            className="bg-gray-100 text-blue-900 text-sm rounded-lg placeholder-gray-400  block w-auto p-2.5 dark:bg-gray-600 dark:placeholder-gray-300 dark:text-white "
            type="text"
            name="whereFrom"
            value={form.whereFrom}
            onChange={handleChange}
          />

          <label className="inline-block font-medium text-blue-900">
            Destino:{" "}
          </label>
          <input
            className="bg-gray-100 text-blue-900 text-sm rounded-lg placeholder-gray-400  block w-auto p-2.5 dark:bg-gray-600 dark:placeholder-gray-300 dark:text-white "
            type="text"
            name="whereTo"
            value={form.whereTo}
            onChange={handleChange}
          />
        </div>
        <div className="flex space-x-3 mb-2">
          <label className="inline-block font-medium text-blue-900">
            Hora de saída:{" "}
          </label>
          <input
            className="bg-gray-100 text-blue-900 text-sm rounded-lg placeholder-gray-400  block w-auto p-2.5 dark:bg-gray-600 dark:placeholder-gray-300 dark:text-white "
            type="number"
            name="departureTime"
            value={form.departureTime}
            onChange={handleChange}
          />
      
          <label className="inline-block font-medium text-blue-900">
            Ponto de encontro:{" "}
          </label>
          <input
            className="bg-gray-100 text-blue-900 text-sm rounded-lg placeholder-gray-400  block w-auto p-2.5 dark:bg-gray-600 dark:placeholder-gray-300 dark:text-white "
            type="text"
            name="meetingPlace"
            value={form.meetingPlace}
            onChange={handleChange}
          />
        </div>

        <div className="flex space-x-3 mb-2">
          <label className="inline-block font-medium text-blue-900">
            Vagas disponíveis:{" "}
          </label>
          <input
            className="bg-gray-100 text-blue-900 text-sm rounded-lg placeholder-gray-400  block w-auto p-2.5 dark:bg-gray-600 dark:placeholder-gray-300 dark:text-white "
            type="number"
            name="capacity"
            value={form.capacity}
            onChange={handleChange}
          />

          <label className="inline-block font-medium text-blue-900">
            Preço por pessoa:
          </label>
          <input
            className="bg-gray-100 text-blue-900 text-sm rounded-lg placeholder-gray-400  block w-auto p-2.5 dark:bg-gray-600 dark:placeholder-gray-300 dark:text-white "
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
          />
        </div>

        <div className="flex space-x-3 mb-2">
          <label className="inline-block font-medium text-blue-900">
            Modelo do veículo:
          </label>
          <input
            className="bg-gray-100 text-blue-900 text-sm rounded-lg placeholder-gray-400  block w-auto p-2.5 dark:bg-gray-600 dark:placeholder-gray-300 dark:text-white "
            type="text"
            name="carModel"
            value={form.carModel}
            onChange={handleChange}
          />

          <label className="inline-block font-medium text-blue-900">
            Motorista verificado?
          </label>
          <input
            className="bg-gray-100 text-blue-900 text-sm rounded-lg  placeholder-gray-400  block w-auto p-2.5 dark:bg-gray-600 dark:placeholder-gray-300 dark:text-white "
            type="checkbox"
            name="verifiedDriver"
            value={form.verifiedDriver}
            onChange={handleChange}
          />
        </div>

        <button className="hover:bg-blue-500 bg-blue-900 text-white font-bold p-2 px-4 rounded" onClick={handleSubmit}>Postar carona</button>
      </form>
      </div>
    </div>
  );
}
