import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// components
import Footnote from './components/footnote';
import Navbar from './components/navbar';
import Logo from './assets/Hearts-Alight-Logo.png';

// pages
import Donations from './pages/donation'
import Home from "./pages/home"

function App() {
  return (
    <div className="App">
      {/*<img src={Logo} /> - logo on top of navbar*/}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/donations' exact Component={Donations} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
