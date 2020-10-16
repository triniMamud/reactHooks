import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import ListaInmuebles from './components/vistas/ListaInmuebles';
import AppNavBar from './components/layout/AppNavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme/Theme';
import RegistrarUsuario from './components/seguridad/RegistrarUsuario';


class App extends Component {
  render (){
    return (
      <Router>
        <MuiThemeProvider theme = {theme}>
          <AppNavBar />

          <Grid containter>
            <Switch>
              <Route path= "/" exact component = {ListaInmuebles}></Route>
              <Route path= "/auth/registrarUsuario" exact component = {RegistrarUsuario}></Route>
            </Switch>
          </Grid>

        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
