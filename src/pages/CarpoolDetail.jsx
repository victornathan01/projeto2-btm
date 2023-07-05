import { useState , useEffect } from "react";
import axios from "axios";
import { useParams , useNavigate } from "react-router-dom";


export default function CarpoolDetail() {

const params = useParams();
const navigate = useNavigate();

const [carpools , setCarpools] = useState({});

useEffect(() => {
  async function fetch() {
    const response = await axios.get(
      `https://webdev103.cyclic.app/penaestrada/${params.id}`

    );
    setCarpools(response.data);
  }
  fetch();
},[]);

  return (
    <div>
        <h1>Detalhes da carona:</h1>
       <h2> Trajeto: {carpools.whereFrom} - {carpools.whereTo}
        </h2> 
        <p>Motorista: {carpools.user}</p>
        <p>Horário de saída: {carpools.departureTime}</p>
        <p>Ponto de encontro: {carpools.meetingPlace}</p>
        <p>Preço por pessoa: {carpools.price}</p>
        <p>Quantos viajantes? {carpools.capacity}</p>
        <p>Veículo: {carpools.carModel}</p>
        <p>Motorista verificado: {carpools.verifiedDriver}</p>
        
<button>Pegar essa carona</button>

    
    </div>
  );
}
