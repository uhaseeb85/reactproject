import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import useToken from './useToken';
import Header from '../Header/Header';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <Header />
      <h4>Enter the Details</h4>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <RegistrationForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;