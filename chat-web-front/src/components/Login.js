import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const baseUrl = "http://localhost:3000/users/login";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const alreadyLogin = () => {
    if (props.loggedIn) {
      window.location.href = "./conversacion";
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const showUser = async (res) => {
    let token = res;
    await axios
      .get("http://localhost:3000/whoAmI", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        props.setUserId(response.data.id);
        props.setUserInfo(response.data.username);
        props.setLoggedIn(!props.loggedIn);
        history.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exportForm = {
      email: email,
      password: password,
    };
    await axios
      .post(baseUrl, exportForm)
      .then(async (response) => {
        props.setToken(response.data.token);
        await showUser(response.data.token);
      })
      .catch((error) => {
        console.log(error.message);
        setOpen(true);
      });
  };

  return (
    <div>
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                CHAT APP
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <Container component="main" maxWidth="xs">
          {alreadyLogin()}
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Typography component="h1" variant="h6">
              ¡Que alegría volver a verte!
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => handleSubmit(e)}
            >
              <TextField
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Iniciar Sesión
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="./register" variant="body2">
                    {"Aún no estas registrado? Regístrate"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
      <div className="">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Usuario y/o contraseña incorrectos
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

const mapDispachToProps = (dispatch) => ({
  setUserId: (id) => dispatch.userReducer.setUserId(id),
  setUserInfo: (username) => dispatch.userReducer.setUserInfo(username),
  setLoggedIn: (loggedIn) => dispatch.userReducer.setLoggedIn(loggedIn),
  setToken: (token) => dispatch.userReducer.setToken(token),
});

export default connect(mapStateToProps, mapDispachToProps)(Login);
