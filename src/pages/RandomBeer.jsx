import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function RandomBeer() {
  // crear el estado que almacena
  const [oneBeer, setOneBeer] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  // llamar a la API

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log("response", response);
      setOneBeer(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  // cláusula de guardia
  if (isFetching === true) {
    return <h3>...buscando</h3>;
  }

  // renderizar vista

  return (
    <div>
      <div>
        <img src={oneBeer.image_url} alt={oneBeer.name} width={50} />
        <h3>{oneBeer.name}</h3>
        <h5>{oneBeer.tagline}</h5>
        <p>{oneBeer.first_brewed}</p>
        <p>{oneBeer.attenuation_level}</p>
        <p>{oneBeer.description}</p>
        <p>{oneBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeer;
