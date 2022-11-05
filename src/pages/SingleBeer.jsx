import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function SingleBeer() {
  // 0. Buscamos el Id por parámetro dinámico

  const { beerId } = useParams();
  // console.log("beerId", beerId);

  // 1. creamos el estado donde estarán los detalles

  const [details, setDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  // 2. buscar la info de de la BD con useEffect

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      // 3. actualizar el estado de la data
      // console.log("response", response);
      setDetails(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  // 4. cláusula de guardia de .. buscando
  if (isFetching === true) {
    return <h3>...buscando</h3>;
  }
  // 5. rederizamos

  return (
    <div>
      <img src={details.image_url} alt={details.name} width={50}/>
      <h3>{details.name}</h3>
      <h5>{details.tagline}</h5>
      <p>{details.first_brewed}</p>
      <p>{details.attenuation_level}</p>
      <p>{details.description}</p>
      <p>{details.contributed_by}</p>
    </div>
  );
}

export default SingleBeer;
