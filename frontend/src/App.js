import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navigation from './components/Navigation';
import ProductsList from './components/ProductsList';
import CreateUser from './components/CreateUser';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
  <Router>
    <Navigation/>
    <div className="container p-4">
      <Route exact path="/" component={ProductsList}/>
      <Route path="/edit/:id"  component={CreateProduct}/>
      <Route path="/create" component={CreateProduct}/>
      <Route path="/user" component={CreateUser}/>
    </div>
  </Router>
  );
}

export default App;
