import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './login';
import { useState } from 'react';
import axios from 'axios'
import Navbar from './navbar/nav';
import { useNavigate } from 'react-router-dom'


function getTimeStamp(){

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zero to minutes if needed
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Construct the time string
  const currentTime = `${hours}:${minutes} ${ampm}`;

  return currentTime;
}

function getCurrentDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = now.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright ©  '}
      <Link color="inherit" href="https://christuniversity.in/">
        Christ University
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const registerVisitor = async (formData) => {
     // Make a POST request to your backend using axios
     try {
      const response = await axios.post('http://localhost:4000/visitor', {visitor: formData});

      if (response.status >= 200 && response.status < 300) {
        console.log('Registration successful');
        return 1;
        
      } else {
        console.error('Registration failed', response.status);
        // Handle failure, e.g., show an error message
        return -1;
      }
    } catch (error) {
      console.error('Error:', error);
    }
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function VisitorSignUp() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    vehicle: '',
    phone: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const timestamp = getTimeStamp();
    const date = getCurrentDate();
    

    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      dept: data.get('department'),
      vehicleNo: data.get('vehicle'),
      phoneNumber: data.get('phone'),
      timeStamp: timestamp,
      registrationDate: date,
      role: "visitor",
    });

    const updatedFormData = {
      ...formData,
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      department: data.get('department'),
      vehicleNo: data.get('vehicle'),
      phoneNumber: data.get('phone'),
      timeStamp: timestamp,
      registrationDate: date,
      role: "visitor",
    }
    console.log(updatedFormData);

    setFormData(updatedFormData);

    const registration = registerVisitor(formData)
    if(!registration){
      console.log("Registration Failed! Try Again!");
    }
    navigate('/');
    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      empStuId: '',
      vehicle: '',
      phone: '',
    }); 
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="department"
                  label="Department"
                  type="text"
                  id="dept"
                  autoComplete="new-select"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="vehicle"
                  label="Vehicle Number"
                  type="text"
                  id="vehicleno"
                  autoComplete="new-vehicle"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  type="number"
                  id="phone"
                  autoComplete="new-phone"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register Visitor!
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/register" variant="body2">
                  Registera new User!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}