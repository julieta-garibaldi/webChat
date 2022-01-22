import React from "react";
import Avatar from "@material-ui/core/Avatar";
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
import AppBar from "@material-ui/core/AppBar";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const baseUrl = "http://localhost:3000/signup";
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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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

const Register = (props) => {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    realm: "",
    username: "",
    email: "",
    password: "",
  });
  const [confirmarPass, setConfirmarPass] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openWarning, setOpenWarning] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleCloseWarning = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenWarning(false);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    window.location.href = "./";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirmarPass == form.password) {
      await axios
        .post(baseUrl, form)
        .then((response) => {
          console.log("Registro exitoso");
          setOpenSuccess(true);
        })
        .catch((error) => {
          console.log(error.message);
          if (error.message == "Request failed with status code 422") {
            setOpenWarning(true);
          }
        });
    } else {
      setOpen(true);
    }
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
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registro
            </Typography>
            <Typography component="h3" variant="h6">
              ¡Estamos felices de recibirte!
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => handleSubmit(e)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    autoComplete="fname"
                    name="realm"
                    variant="outlined"
                    required
                    fullWidth
                    id="realm"
                    label="Nombre y Apellido"
                    autoFocus
                    value={form.realm}
                    onChange={(e) =>
                      setForm({ ...form, realm: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Nombre de Usuario"
                    name="username"
                    autoComplete="username"
                    value={form.username}
                    onChange={(e) =>
                      setForm({ ...form, username: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Correo Electónico"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    helperText="Mínimo 8 caracteres."
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Confirmar contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={confirmarPass}
                    onChange={(e) => setConfirmarPass(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Registrarme
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="./" variant="body2">
                    Ya tienes una cuenta? Inicia Sesión
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
            Las contraseñas no coinciden!
          </Alert>
        </Snackbar>
      </div>
      <div className="">
        <Snackbar
          open={openWarning}
          autoHideDuration={6000}
          onClose={handleCloseWarning}
        >
          <Alert
            onClose={handleCloseWarning}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Los datos ingresados corresponden a un usuario ya registrado!
          </Alert>
        </Snackbar>
      </div>
      <div className="">
        <Snackbar
          open={openSuccess}
          autoHideDuration={6000}
          onClose={handleCloseSuccess}
        >
          <Alert
            onClose={handleCloseSuccess}
            severity="success"
            sx={{ width: "100%" }}
          >
            Registro exitoso!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Register;
