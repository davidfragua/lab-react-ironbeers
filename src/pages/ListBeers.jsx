import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



function ListBeers() {

    // 1. crear el estado que almacena la data de la API
    const [ list, setList ] = useState(null)
    const [ isFetching, setIsFetching ] = useState(true)

    // 2. llamar a la API
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            console.log(response);
            // 3. guardar la información en el estado
            setList(response.data)
            setIsFetching(false)
        } catch (error) {
            console.log(error)
        }
    }

    // 4. cláusula de guardia con el ...buscando
    if( isFetching === true) {
        return <h3>...buscando</h3>
    }
    // 5. renderizar a data

  return (
    <div>

        {list.map((eachBeer) => {
            return (
                <div>
                 <img src={eachBeer.image_url} alt="{eachBeer.name}" width={30}/>   
                <p>Nombre: {eachBeer.name}</p>
                <p>Tagline: {eachBeer.tagline}</p>
                <p>Contributed by: {eachBeer.contributed_by}</p>
                <Link to="/beers/:beerId">Ver detalles</Link>
                {/* RECORDAR CAMBIAR EL ID EN LA URL */}

                </div>

            )
        })}

        </div>
  )
}

export default ListBeers