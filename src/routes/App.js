import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import firebase from 'firebase'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import { login } from '../actions/authAction';
import { PrivateRouter } from './PrivateRoute';
import { PublicRouter } from './PublicRoute';
import Home from '../containers/home/Home';
import AuthRoutes from './AuthRoutes';
import Login from '../containers/login/Login';
import Register from '../containers/register/Register';

function App() {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoogedIn, setIsLoogedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
        setIsLoogedIn(true)
      } else {
        setIsLoogedIn(false)
      }
      setChecking(false)
    })
  }, [dispatch, setChecking, setIsLoogedIn])

  if (checking) {
    return (
      <h1>Loading ...</h1>
    )
  }

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <PublicRouter path='/auth' component={AuthRoutes} isAuthenticated={isLoogedIn} />
          <PrivateRouter path='/home' component={Home} isAuthenticated={isLoogedIn} />
          {/* <Route exact path='/auth/login' component={Login} />
          <Route exact path='/auth/register' component={Register} /> */}
          <Redirect to='/auth/login' />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
