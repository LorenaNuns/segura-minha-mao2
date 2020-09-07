import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

/*Páginas*/
import Depoimentos from './view/depoimentos/';
import Encontro from './view/encontro';

function App() {
  return (
  <Router>
    <Route exact path='/' component={Depoimentos} />
    <Route exact path='/encontro' component={Encontro} />
  </Router>
  ); 
}

export default App;  
