import Navbar from './components/navbar'
import './App.css';
import Logo from './assets/Hearts-Alight-Logo.png'

function App() {
  return (
    <div className="App">
      <img src={Logo} />
      <Navbar />
    </div>
  );
}

export default App;
