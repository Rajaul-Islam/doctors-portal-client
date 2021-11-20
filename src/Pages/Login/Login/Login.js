import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import login from '../../../images/login.png'
const Login = () => {

    const location = useLocation()
    const history = useHistory()

    const { user,
        isLoading,

        loginUser,
        error, signInWithGoogle } = useAuth()
    const [loginData, setLogInData] = useState({})
    console.log(loginData);
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLogInData(newLoginData);

    }

    const handleGoogleSignin = () => {
        signInWithGoogle(location, history)
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
        // alert('hello')
    }
    return (
        <Container>

            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6} >
                    <Typography variant="body1 gutterBottom">
                        Login
                    </Typography>

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            type="email"
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="User Email"
                            name='email'
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            type='password'
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name='password'
                            onBlur={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant='contained'>
                            Login
                        </Button> <br />
                        <NavLink style={{ textDecoration: 'none' }} to='register'>New User? Please Register</NavLink>

                    </form>
                    <p>-------------------------------------</p>
                    <Button variant='contained' onClick={handleGoogleSignin}>Google SignIn</Button>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Login successfully</Alert>
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

export default Login;