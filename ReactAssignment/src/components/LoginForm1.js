import React from 'react';
import { Container, TextField, Checkbox, FormControlLabel, Button, Typography, Box } from '@mui/material';

const containerStyle = {
  marginTop: '100px',
  display: 'flex',
  justifyContent: 'center',
};

const formStyle = {
  width: '300px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#fff',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const submitButtonStyle = {
  marginTop: '15px',
};

const LoginForm1 = () => {
  return (
    <Container style={containerStyle}>
      <Box style={formStyle}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <div style={formGroupStyle}>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              fullWidth
              required
              autoFocus
            />
          </div>
          <div style={formGroupStyle}>
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div style={formGroupStyle}>
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
            />
          </div>
          <div style={submitButtonStyle}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Login
            </Button>
          </div>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm1;
