import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import "react-router";
import {
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul className="heading-nav">
              <li className="heading-nav-entry"><NavLink exact to="/" activeClassName="active" activeStyle={{padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px'}}>Home</NavLink></li>
              <li className="heading-nav-entry"><NavLink exact to="/users" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px'}}>Users</NavLink></li>
              <li className="heading-nav-entry"><NavLink exact to="/todos" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px'}}>Todos</NavLink></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/todos" component={Todos} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <div class="row">&nbsp;</div>
        <div class="row">&nbsp;</div>
        <div class="row">&nbsp;</div>
        <div class="row">&nbsp;</div>
        <div class="row">&nbsp;</div>
        <div class="row">&nbsp;</div>
        <div class="row">&nbsp;</div>
        <div class="row">&nbsp;</div>
        <div class="row">
          <div class="small-5 columns">&nbsp;</div>
          <div class="small-2 columns">
            <div class="card text-center">
              <h1>Users<br />and<br /> Todos</h1>
            </div>
          </div>
          <div class="small-5 columns">&nbsp;</div>
        </div>
      </div>
    )
  }
}

class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
          <li>User 4</li>
        </ul>
      </div>
    )
  }
}

class Todos extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Todo 1</li>
          <li>Todo 2</li>
          <li>Todo 3</li>
          <li>Todo 4</li>
        </ul>
      </div>
    )
  }
}

export default App;
