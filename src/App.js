import Navbar from './components/navbar';
import './App.css';
import Logo from './assets/Hearts-Alight-Logo.png';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*<img src={Logo} /> - logo on top of navbar*/}
      <Navbar />
    </div>
  );
}

export default App;
