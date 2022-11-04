import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <h2>Home Beers</h2>
        <Link to="/beers" >Beers</Link>
        <Link to="/random-beer" >Random Beer</Link>
        <Link to="/new-beer" >New Beer</Link>

    </div>
  )
}

export default Home