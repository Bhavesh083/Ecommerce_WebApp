import React from 'react'
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Header' ; 
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path='/contact'>
                <Header />
                <Contact />
                <Footer />
            </Route>
            <Route path='/checkout'>
                <Header />
                <Checkout />
                <Footer />
            </Route>
            <Route path='/login' >
                 <Header />
                 <Login />
                <Footer />
            </Route>
            <Route path='/'>
                <Header />
                <Home />
                <Footer />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;