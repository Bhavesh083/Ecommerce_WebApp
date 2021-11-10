import React from 'react'
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Header' ; 
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import Contact from './Contact';
import Signup from './Signup';
import SearchRes from './SearchRes';
import Myorders from './Myorders';
import Itemopen from './Itemopen';
import { useSelector } from 'react-redux';

function App() {

 
  const op = useSelector(state => state.openItemReducer.item);
  const si = useSelector(state => state.loginReducer.notlogin);
  
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path='/contact'>
                <Header />
                <Contact />
                <Footer />
            </Route>
            <Route path='/myorders'>
                <Header />
                <Myorders /> 
                <Footer />    
            </Route>
         {op.cost ? 
            <Route path='/openitem'>
                <Header />
                <Itemopen /> 
                <Footer />
            </Route>:''}
            <Route path='/checkout'>
                <Header />
                <Checkout />
                <Footer />
            </Route>
            <Route path='/searchres'>
                <Header />
                <SearchRes />
                <Footer />
            </Route>
          {si?"":
            <Route path='/signup' >
                 <Header />
                 <Signup />
                 <Footer />
            </Route>}
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