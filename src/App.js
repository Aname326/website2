import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// components
import Footnote from './components/footnote';
import Navbar from './components/navbar';
import Logo from './assets/Hearts-Alight-Logo.png';

// pages
import Home from "./pages/home";
import Events from './pages/events';
import Contacts from './pages/contacts';
import Donations from './pages/donation';

function App() {
  return (
    <div className="App">
      {/*<img src={Logo} /> - logo on top of navbar*/}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/events' exact Component={Events} />
          <Route path='/contacts' exact Component={Contacts} />
          <Route path='/donations' exact Component={Donations} />
        </Routes>
        <Footnote />
      </Router>
    </div>
  );
}

export default App;
