import {Alert, Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField} from '@mui/material';
import {useState} from "react";
import apiUrl from "../config";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigator = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showError, setShowError] = useState(false);

    const handleFormSubmit = async () => {
        if (username === '' || password === '') {
            setErrorMessage('Username and password are required');
            setShowError(true);
            return;
        }
        try {
            const response = await fetch(apiUrl + 'token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const {access, refresh} = await response.json();
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);
            navigator('/');
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minWidth="100vw" minHeight="100vh">
            <Paper>
                <h1>Login</h1>
                {showError && <Alert severity="error" onClose={() => setShowError(false)}>{errorMessage}</Alert>}
                <Grid container padding={10}>
                    <Grid>
                        <Grid
                            container
                            spacing={8}
                            direction={'column'}
                            justify={'center'}
                            alignItems={'center'}
                        >
                            <Grid item xs={12}>
                                <TextField
                                    label="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    type={'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={() => setChecked(!checked)}
                                            inputProps={{'aria-label': 'primary checkbox'}}
                                        />
                                    }
                                    label="Keep me logged in"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth onClick={handleFormSubmit}> Login </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default Login;