import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import useStyles from "../styles/login";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import NavBar from "./common/navBar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Field } from "./common/textField";
import { FieldPassword } from "./common/fieldPassword";
import rocket from "../assets/rocket.png";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const baseUrl = "http://localhost:3000/users/login";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const validate = Yup.object({
    email: Yup.string()
      .email("Correo electrónico invalido")
      .required("Campo obligatorio"),
    password: Yup.string().required("Campo obligatorio"),
  });

  const alreadyLogin = () => {
    if (props.loggedIn) {
      history.push("/conversacion");
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
        console.log(response.data);
        props.setUserId(response.data.id);
        props.setUserInfo(response.data.username);
        props.setLoggedIn(!props.loggedIn);
        history.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = async (values) => {
    const exportForm = {
      email: values.email,
      password: values.password,
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
      <div className={classes.root}>
        <NavBar />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid
            item
            xs={4}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <img src={rocket} alt="" width="600" height="450"></img>
          </Grid>
          <Divider />
          <Grid item xs={8}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              {alreadyLogin()}
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
                <br />
                <Formik
                  className={classes.form}
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={validate}
                  onSubmit={(values) => handleSubmit(values)}
                >
                  {(formik) => (
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Form>
                          <Field
                            label="Correo electrónico"
                            name="email"
                            type="text"
                          />
                          <FieldPassword
                            label="Contraseña"
                            name="password"
                            type="password"
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
                        </Form>
                      </Grid>
                    </Grid>
                  )}
                </Formik>
              </div>
            </Container>
          </Grid>
        </Grid>
      </Box>
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
  token: state.userReducer.token,
});

const mapDispachToProps = (dispatch) => ({
  setUserId: (id) => dispatch.userReducer.setUserId(id),
  setUserInfo: (username) => dispatch.userReducer.setUserInfo(username),
  setLoggedIn: (loggedIn) => dispatch.userReducer.setLoggedIn(loggedIn),
  setToken: (token) => dispatch.userReducer.setToken(token),
});

export default connect(mapStateToProps, mapDispachToProps)(Login);
