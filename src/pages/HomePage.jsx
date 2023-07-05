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
    <div>
      <h1> Chegue ao seu destino em poucos cliques: </h1>
      <div className="cards">
        {carpools.map((carpool) => {
          return (
            <div className="card" key={carpool._id}>
              <h2>
                Trajeto: {carpool.whereFrom} - {carpool.whereTo}{" "}
              </h2>
              <p>Preço por pessoa: {carpool.price}</p>
              <p>Veículo: {carpool.carModel}</p>
              <p>Motorista verificado: {carpool.verifiedDriver}</p>
              <Link to={`/carona/${carpool._id}`}>Ver detalhes</Link>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}
