import React from "react";
import useStyles from "../../styles/common";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

const NavBar = (props) => {
  const classes = useStyles();

  const cerrarSesion = () => {
    props.setLogOut();
  };

  const welcomeUser = () => {
    if (props.loggedIn) {
      return (
        <Typography variant="h6" component="p" className={classes.title}>
          ¡Bienvenid@ {props.username}!
        </Typography>
      );
    } else {
      return;
    }
  };

  const buttonLogOut = () => {
    if (props.loggedIn) {
      return (
        <Button color="inherit" onClick={() => cerrarSesion()}>
          Cerrar Sesión
        </Button>
      );
    } else {
      return;
    }
  };

  return (
    <AppBar position={"static"} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          CHAT APP
        </Typography>
        {welcomeUser()}
        {buttonLogOut()}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  username: state.userReducer.username,
});

const mapDispachToProps = (dispatch) => ({
  setLogOut: () => dispatch.userReducer.setLogOut(),
});

export default connect(mapStateToProps, mapDispachToProps)(NavBar);
