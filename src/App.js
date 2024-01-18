import React from 'react';
import { AppBar, Button, Container, CssBaseline, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    backgroundColor: '#4B6908',
  },
  title: {
    fontFamily: 'Outfit',
    color: 'white',
    flexGrow: 1, // Let the title grow to take available space
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  button: {
    fontFamily: 'Readex Pro',
    color: 'white',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    marginTop: theme.spacing(3), 
  },
  signupButton: {
    fontFamily: 'Readex Pro',
    color: 'white',
    borderRadius: 8,
    backgroundColor: '#4B6908',
    padding: '10px',
    marginTop: theme.spacing(0), 
  }
}));


function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Fuel.Mate
          </Typography>
          <Button className={classes.button} onClick={() => console.log('Button pressed ...')}>
            Log In
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Container maxWidth="md">
          <Typography variant="h4" style={{ fontFamily: 'Outfit', fontSize: 25, marginTop: 50 }}>
            Your Everyday Fuel Mate
          </Typography>
          <Typography variant="body1" style={{ fontFamily: 'Readex Pro', fontSize: 20, marginTop: 10 }}>
            Elevate your nutrition game effortlessly with AI-driven meal plans tailored to your goals. Whether you're aiming for peak performance, muscle gain, or weight management, we've got your plate covered. Unlock the power of precision nutrition and experience the synergy of taste and performance.
          </Typography>
          <Button className={classes.signupButton} style={{ marginTop: 20 }} onClick={() => console.log('Button pressed ...')}>
            Sign up
          </Button>
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1506159904226-d6cfd457c30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw0fHxwbGF0ZXxlbnwwfHx8fDE3MDU1OTEyODd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="FuelMate"
          />
        </Container>
      </main>
    </div>
  );
}

export default HomePage;
