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
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     

     {/* <Header />
    
     <Navbar /> */}


    <Routes>

    <Route path="/" element={ <Home /> } />
    <Route path="/beers" element={ <ListBeers /> } />
    <Route path="/new-beer" element={ <NewBeer />} />
    <Route path="/single-beer/:beerId" element={ <SingleBeer />} />
    <Route path="/random-beer" element={ <RandomBeer />} />
    
    {/* rutas de errores */}
    <Route path="/error" element={ <Error />} />
    <Route path="*" element={ <NotFound />}></Route>



    
    
    </Routes>

    </div>
  );
}

export default App;
