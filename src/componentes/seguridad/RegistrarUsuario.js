import React, {Component} from 'react'
import {
    Container,
    Avatar,
    Typography,
    Grid,
    TextField,
    Button
} from '@material-ui/core'
import LockOutLineIcon from '@material-ui/icons/LockOpenOutlined'

const style = {
    paper: {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: 8,
        backgroundColor: "#e53935"
    },
    form: {
        width: "100%",
        marginTop: 10
    },
    submit: {
        marginTop: 15,
        marginBottom: 20
    }
};

export default class RegistrarUsuario extends Component {
  state = {
    usuario: {
      nombre:'',
      apellidos:'',
      email:'',
      password:''
    }
  }

  onChange = e => {
    let usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({
      usuario: usuario
    });
  }

  registrarUsuario = async e => {
    e.preventDefault();
    console.log('este es el oibjeto cuanod cambia de estado',this.state.usuario);
    
  }

render() {
    return (
        <Container maxWidth="md">
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockOutLineIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registre su cuenta
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <TextField onChange={this.onChange} name="nombre" value={this.state.usuario.nombre} fullWidth label="Ingrese su nombre"/>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField onChange={this.onChange} name="apellidos" value={this.state.usuario.apellidos} fullWidth label="Ingrese sus apellidos"/>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField onChange={this.onChange} name="email" value={this.state.usuario.email} fullWidth label="Ingrese su correo electrónico"/>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField onChange={this.onChange} type="password" value={this.state.usuario.password} name="password" fullWidth label="Ingrese su password"/>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item md={6} xs={12}>
                            <Button type="submit" variant="contained" fullWidth size="large" color="primary"
                                style={style.submit} onClick={this.registrarUsuario}>
                                Registrar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}}
