import { Container, Typography, TextField, Avatar, Grid, Button } from '@material-ui/core';
import React, { Component } from 'react';
import LockoutLineIcon from '@material-ui/icons/LockOutlined';

const style = {
    paper: {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: 8,
        backgroundColor: "#E53935"
    },
    form: {
        width: "100%",
        marginTop: 10
    },
    submit: {
        marginTop: 15,
        marginBottom: 20
    }
}

class RegistrarUsuario extends Component {
    state = {
        usuario: {
            nombre: "",
            apellido: "",
            email: "",
            password: ""
        }
    }

    onChange = e => {
        let usuario = Object.assign ({}, this.state.usuario);
        usuario[e.target.name] = e.target.value;
        this.setState ({
            usuario: usuario
        })
    }

    registrarUsuario = e => {
        e.preventDefault();
        console.log('imprimir objeto usuario del state', this.state.usuario);
    }

    render() {
        return (
            <Container maxWidth= "md">
                <div style= {style.paper}>
                    <Avatar style= {style.avatar}>
                        <LockoutLineIcon />
                    </Avatar>
                    <Typography component= "h1" variant= "h5">
                        Registre su cuenta
                    </Typography>
                    <form style= {style.form}>
                        <Grid container spacing= {2}>
                            <Grid item md= {6} xs= {12}>
                                <TextField name= "nombre" onChange= {this.onChange} value={this.state.usuario.nombre}  fullWidth label= "Ingrese su nombre" />
                            </Grid>
                            <Grid item md= {6} xs= {12}>
                                <TextField name= "apellido" onChange= {this.onChange} value={this.state.usuario.apellido} fullWidth label= "Ingrese su apellido" />
                            </Grid>
                            <Grid item md= {6} xs= {12}>
                                <TextField name= "email" onChange= {this.onChange} value={this.state.usuario.email} fullWidth label= "Ingrese su email" />
                            </Grid>
                            <Grid item md= {6} xs= {12}>
                                <TextField type="password" name= "password" onChange= {this.onChange} value={this.state.usuario.password} fullWidth label= "Ingrese su sontraseña" />
                            </Grid>
                        </Grid>
                        <Grid container justify= "center">
                            <Grid item xs= {12} md= {6}>
                                <Button type= "submit" onClick= {this.registrarUsuario} variant= "contained" fullWidth size="large" color= "primary" style={style.submit}>
                                    Registrar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

export default RegistrarUsuario;