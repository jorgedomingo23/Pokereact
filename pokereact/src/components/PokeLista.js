import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const PokeLista = (props) => {
    const [pokemons,setPokemons] = useState([]);
    const navigate = useNavigate();

  useEffect(()=>{
     axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response=>{
        setPokemons(response.data.results);
})
  },[]);

  const funcionNavegaraSnivy = () => {
    navigate("/pokemon/495");
  }

  const funcionNavegar = (p) => {
    navigate("/pokemon/" + p)
    navigate(`/pokemon/${p}`)    
  }
 

    return <div>
      <button onClick={funcionNavegaraSnivy}>Navegar a Snivy</button>
            <link to= "/pokemon/25">Ir a PIKACHU</link>
            <h1>Lista</h1>
            {pokemons.map(p =>{
              return <><p>Este pokemon es {p.name}</p>
              <div onClick={()=>{navigate("/pokemon/" + p.name)}}>
                Navegar</div>
              <Link to={"pokemon/"+p.name}>Navegar</Link>
              </>
            })}
        </div>
}

export default PokeLista;