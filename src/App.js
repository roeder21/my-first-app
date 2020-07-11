import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Members from "./pages/Members";
import Singlemember from "./pages/Singlemember";
import Error from "./pages/Error";
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return <>

  <Navbar/>
 <div>
  <Switch>
  <Route exact path = "/" component = {Home}/>
  <Route exact path = "/members" component = {Members}/>
  <Route exact path = "/members/:slug" component = {Singlemember}/>
  <Route component = {Error} />
  </Switch>
  </div>
  </>;
}

export default App;
