import React, { Component } from 'react'
import { Container, Avatar } from '@material-ui/core'
import LockOutLineIcon from '@material-ui/icons/LockOpenOutlined'

const style= {
  paper:{
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center"
  },
  avatar: {
    marginTop: 8,
    backgroundColor: "#e53935"
  }

}

export default class componentName extends Component {
  render() {
    return (
      <Container maxWidth='md'>
        <div className={style.paper}>
          <Avatar className={style.avatar}>

          </Avatar>
        </div>
      </Container>
    )
  }
}
