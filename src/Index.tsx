import React, { Component } from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link , NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// stateless functional component
const ExpenseDashboardPage = () => (
  <div>
    <h1>THis is my dashboard component</h1>
  </div>
);

const EditPage = () => (
  <div>
    <h2>welcome from Edit Page component</h2>
  </div>

);

const CreatePage = () => (
  <div>
    <h2>welcome from functionless component</h2>
  </div>

);

const AboutPage = () => (
  <div>
    <h2>welcome from functionless component</h2>
  </div>

);

const NotFoundPage = () => (
  <div>
    <p>404!</p>
  </div>

);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName='is-active'>Home</NavLink>
    <NavLink to="/create" activeClassName='is-active'>Create</NavLink>
    <NavLink to="/edit" activeClassName='is-active'>Edit</NavLink>
    <NavLink to="/about" activeClassName='is-active'>About</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true} />
        <Route path='/edit' component={EditPage} />
        <Route path='/create' component={CreatePage} />
        <Route path='/about' component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);



ReactDOM.render(routes, document.getElementById('app'));

