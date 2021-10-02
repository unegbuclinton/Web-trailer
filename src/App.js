import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>

      <Nav />

      <switch>
        <Route path ='/Home' exact component={Home} />
        <Route path ='/Services'  component={Services} />
        <Route path ='/Sign-up'  component={SignUp} />
        <Route path ='/Contact'  component={Contact} />
      </switch>

      </Router>
     

    </>
  );
}

export default App;
