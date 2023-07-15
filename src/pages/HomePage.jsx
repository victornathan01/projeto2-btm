import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [carpools, setCarpools] = useState([]);

  useEffect(() => {
    async function fetchCarpools() {
      const response = await axios.get(
        "https://webdev103.cyclic.app/penaestrada"
      );
      setCarpools(response.data);
    }
    fetchCarpools();
  }, []);

  return (
    <div className="px-8 pt-4 pb-8">
    <div>
      <h1 className="text-2xl text-yellow-600 text-center p-4 mb-4"> Escolha uma carona abaixo e boa viagem! </h1>
      <div className="flex gap-4 cards">
        {carpools.map((carpool) => {
          return (
            <div className="border mb-4 p-5 rounded w-full shadow-md" key={carpool._id}>
              <h2>
                <strong>Trajeto:</strong> {carpool.whereFrom} - {carpool.whereTo}{""}
              </h2>
              <p><strong>Preço por pessoa:</strong> {carpool.price}</p>
              <p><strong>Veículo:</strong> {carpool.carModel}</p>
              <p><strong>Motorista verificado:</strong> {carpool.verifiedDriver}</p>
              <Link className="text-blue-900 hover:text-yellow-600" to={`/carona/${carpool._id}`}>Ver detalhes</Link>
            </div>
          );
        })}
        
      </div>
    </div></div>
  );
}
