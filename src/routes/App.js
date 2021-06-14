import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import firebase from 'firebase'
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import { login } from '../actions/authAction';
import { PrivateRouter } from './PrivateRoute';
import { PublicRouter } from './PublicRoute';
import Home from '../containers/home/Home';
import AuthRoutes from './AuthRoutes';
import AddMovie from '../containers/addmovie/AddMovie';
import ContenedorNav from '../containers/sideBar/ContenedorNav';

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
          <ContenedorNav>
            <PrivateRouter path='/home' component={Home} isAuthenticated={isLoogedIn} />
            <PrivateRouter path='/addmovies' component={AddMovie} isAuthenticated={isLoogedIn} />
            {/* <Route exact path='/auth/login' component={Login} />
          <Route exact path='/auth/register' component={Register} /> */}
          </ContenedorNav>
          <Redirect to='/auth/login' />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
