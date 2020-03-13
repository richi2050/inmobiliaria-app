import React, { Component } from 'react'
import { AppBar, Toolbar } from '@material-ui/core'

export default class AppNavbar extends Component {
  render() {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar></Toolbar>
        </AppBar>
      </div>
    )
  }
}
