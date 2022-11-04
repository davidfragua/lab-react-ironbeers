import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
     
    <Routes>

    <Route path="/" element={ <Home /> }></Route>
    <Route path="/beers" element={ <ListBeers /> }></Route>
    <Route path="/new-beer" element={ <NewBeer />}></Route>
    <Route path="/single-beer" element={ <SingleBeer />}></Route>
    <Route path="/random-beer" element={ <RandomBeer />}></Route>
    
    {/* rutas de errores */}
    <Route path="/error" element={ <Error />}></Route>
    <Route path="*" element={ <NotFound />}></Route>



    
    
    </Routes>

    </div>
  );
}

export default App;
