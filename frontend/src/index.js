import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Root from './routes/Root';
import LoginForm from './components/LoginForm';
import CadastroForm from './components/CadastroForm';

ReactDOM.render(
  <Router>
    <Switch>
    <Route path="/cadastro">
         <CadastroForm />
        </Root>
        </Root>
      </Route>
      <Route exact path="/login">
        <Root>
        <Root>
        <LoginForm />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
