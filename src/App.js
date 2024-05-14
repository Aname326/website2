import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import { StateProvider } from './components/language';
import { useStateContext } from './components/language';

// components
import Footnote from './components/footnote';
import Login from './components/login';
import Navbar from './components/navbar';
import Logo from './assets/Hearts-Alight-Logo.png';

// pages
import Home from "./pages/home";
import Events from './pages/events';
import Contacts from './pages/contacts';
import Donations from './pages/donations';

function App() {
  return (
    <div className="App">
      {/*<img src={Logo} /> - logo on top of navbar*/}
      <StateProvider>
        <Router>
          <Login />
          <Navbar />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/events' exact component={Events} />
            <Route path='/contacts' exact component={Contacts} />
            <Route path='/donations' exact component={Donations} />
          </Routes>
          <Footnote />
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
