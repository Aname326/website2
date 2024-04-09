import Navbar from './components/navbar';
import './App.css';
import Logo from './assets/Hearts-Alight-Logo.png';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/home"
import Donations from './pages/donation'
import NavbarSC from './components/navbarSC'
import NavbarTC from './components/navbarTC'

function App() {
  return (
    <div className="App">
      {/*<img src={Logo} /> - logo on top of navbar*/}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/donations' exact Component={Donations} />
          <Route path='/navbar' exact Component={Navbar} />
          <Route path='/navbarTC' exact Component={NavbarTC} />
          <Route path='/navbarSC' exact Component={NavbarSC} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
