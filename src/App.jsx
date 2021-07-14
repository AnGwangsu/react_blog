import React from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import WebGame from './pages/WebGame'
import Portfolio from './pages/Portfolio'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/webGame" component={WebGame}/>
          <Route path="/portfolio" component={Portfolio}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
