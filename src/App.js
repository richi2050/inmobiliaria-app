import React from 'react';
/*import logo from './logo.svg'; */
import './App.css';
import ListaInmuebles from './componentes/vistas/ListaInmuebles';
import { MuiThemeProvider, Grid } from '@material-ui/core';
import theme from './theme/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNavbar from './componentes/layout/AppNavbar';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <AppNavbar />
        <Grid container>
          <Switch>
          <Route path='/' exact component={ListaInmuebles} ></Route>
          <Route path='/auth' exact component={RegistrarUsuario} ></Route>

          </Switch>
        </Grid>
      </MuiThemeProvider>
    </Router>

  );
}

export default App;
