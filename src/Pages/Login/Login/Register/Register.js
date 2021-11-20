import { Navigation } from '@mui/icons-material';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../Hook/useAuth';
import login from '../../../../images/login.png'
const Register = () => {
    const history = useHistory()
    const [loginData, setLogInData] = useState({})
    const { user, registerUser, isLoading, error } = useAuth()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLogInData(newLoginData);

    }



    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match')

            return
        }

        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();

    }
    return (
        <Container>

            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6} >
                    <Typography variant="body1 gutterBottom">
                        Register
                    </Typography>

                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            type="text"
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="User Name"
                            name='name'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            type="email"
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="User Email"
                            name='email'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            type='password'
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name='password'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            type='password'
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            name='password2'
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant='contained'>
                            Login
                        </Button> <br />
                        <NavLink style={{ textDecoration: 'none' }} to='/login'>Already Registered? Please Login</NavLink>

                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully</Alert>
                    }
                    {error && <Alert variant="outlined" severity="error">
                        {error}
                    </Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;