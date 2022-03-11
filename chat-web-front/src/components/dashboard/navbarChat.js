import React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "../../styles/dashboard";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

const NavBarChat = (props) => {
  const classes = useStyles();
  const userSet = () => {
    if (props.user_destino != null) {
      return (
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <Avatar
              alt="Remy Sharp"
              src="/broken-image.jpg"
              className={classes.title}
            >
              {props.form.user_destino[0]?.toUpperCase()}
            </Avatar>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h6" noWrap className={classes.title}>
              {props.form.user_destino}
            </Typography>
          </Grid>
        </Grid>
      );
    } else {
      return;
    }
  };

  React.useEffect(() => {
    userSet();
  }, [props.user_destino]);

  return (
    <Toolbar className={classes.customizeToolbar}>
      {userSet()}
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Buscar…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          value={props.buscadorChat}
          onChange={(e) => props.setbuscadorChat(e.target.value)}
        />
      </div>
    </Toolbar>
  );
};

const mapStateToProps = (state) => ({
  id: state.userReducer.id,
  username: state.userReducer.username,
  loggedIn: state.userReducer.loggedIn,
  user_destino: state.userReducer.user_destino,
});

const mapDispachToProps = (dispatch) => ({
  setLogOut: () => dispatch.userReducer.setLogOut(),
  setUserDestino: (user_destino) =>
    dispatch.userReducer.setUserDestino(user_destino),
});

export default connect(mapStateToProps, mapDispachToProps)(NavBarChat);
