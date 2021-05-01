import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Log from './components/pages/Log';
import Product from './components/pages/Product';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/about' exact component= {About} />
        <Route path='/sign-up' exact component= {SignUp} />
        <Route path='/log' exact component= {Log} />
        <Route path='/product' exact component= {Product} />
      </Switch>
    </Router>
    </>
  );
}

export default App;