import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListaInmuebles from './componentes/vistas/ListaInmuebles';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ListaInmuebles />
    </MuiThemeProvider>
  );
}

export default App;
