import React from 'react'; //raf buscar enter
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './componentes/navbar';
import Home from './componentes/paginas/Home';
import Products from './componentes/paginas/Products';

import About from './componentes/paginas/About';
import {Contact} from './componentes/paginas/Contact';
import {Servicess} from './componentes/paginas/Servicess';

function App(){
  return (
    <div className='App'>
      <Router><Navbar/></Router>
      <Home/>
      <Products/>
      <About/>
      <Servicess/>
      <Contact/>

      </div>
  );
}

export default App;