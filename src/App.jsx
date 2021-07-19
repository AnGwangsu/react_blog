import React from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import WebGame from './pages/webgame/WebGame'
import Portfolio from './pages/portfolio/Portfolio'

const App = () => {
  return (
    <Router>
      <div>
        <TopBar/>
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
