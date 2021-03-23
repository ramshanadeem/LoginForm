import logo from './logo.svg';
import './App.css';
import React from "react";
import Login from './pages/Login'


//import AddCart from './pages/AddCart'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './images/Logo.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>

      <div className={classes.root} className="navbar">
        <AppBar style={{backgroundColor:"white"}} position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          
            <Typography variant="h6" className={classes.title}>
              <img style={{ height: '60px' }} src={Logo}></img>
            </Typography>
            {/* <Button color="inherit"><Link to="/" className="link">Home</Link></Button> */}
            <Button color="inherit"><Link to="/Login" className="link">Login</Link></Button>
            {/* <Button color="inherit"> <Link to="/register" className="link">Register</Link></Button>
      */}
          </Toolbar>
        </AppBar>
      </div>

      <div className="App">
        <header>

          <div>

            <Switch>
             
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </div>

        </header>
      </div >
    </Router>
  );
}

export default App;

