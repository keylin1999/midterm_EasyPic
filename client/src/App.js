import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import './a.css';
import Home from './component/Home';
import Add from './component/Add'
import NavBar from './component/NavBar'
import Gallery from './component/Gallery'

class App extends Component {
  render() {
    const App = () => (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path='/gallery/:category' component={Gallery}/>
          <Route exact path='/add' component={Add}/>
          <Redirect from="/index.html" to='/'/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
