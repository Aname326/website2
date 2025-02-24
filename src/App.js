import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { StateProvider } from './components/language';
import { LoginProvider } from './components/login';

// components
import Footnote from './components/footnote';
import Photo from './components/photo';
import Navbar from './components/navbar';

// pages
import Home from "./pages/home";
import About from "./pages/about";
import Events from './pages/events';
import Contacts from './pages/contacts';
import Donations from './pages/donations';

function App() {
  return (
    <div className="App">
      {/*<img src={Logo} /> - logo on top of navbar*/}
      
      <Router>
        <StateProvider>
          <LoginProvider>
            <Photo />
            <Navbar />
            <Routes>
              <Route path='/' exact Component={Home} />
              <Route path='/about' exact Component={About} />
              <Route path='/events' exact Component={Events} />
              <Route path='/contacts' exact Component={Contacts} />
              <Route path='/donations' exact Component={Donations} />
            </Routes>
            <Footnote />
          </LoginProvider>
        </StateProvider>
      </Router>
      
    </div>
  );
}

export default App;
