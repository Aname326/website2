import Navbar from './components/navbar';
import './App.css';
import Logo from './assets/Hearts-Alight-Logo.png';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*<img src={Logo} /> - logo on top of navbar*/}
      <Router>
        <Navbar />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
