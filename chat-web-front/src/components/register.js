import React from "react";
import useStyles from "../styles/register";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Formik, Form } from "formik";
import { Field } from "../components/common/textField";
import * as Yup from "yup";
import NavBar from "../components/common/navBar";
import { FieldPassword } from "../components/common/fieldPassword";
import { connect } from "react-redux";
import { useHistory } from "react-router";

const baseUrl = "http://localhost:3000/signup";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openWarning, setOpenWarning] = React.useState(false);

  const validate = Yup.object({
    realm: Yup.string()
      .max(40, "Máximo 40 caracteres")
      .required("Campo obligatorio"),
    username: Yup.string()
      .max(15, "Máximo 15 caracteres")
      .required("Campo obligatorio"),
    email: Yup.string()
      .email("Correo electrónico invalido")
      .required("Campo obligatorio"),
    password: Yup.string()
      .min(8, "Mínimo 8 caracteres")
      .required("Campo obligatorio"),
    confirmPass: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Campo obligatorio"),
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

  const handleSubmit = async (values) => {
    const form = {
      realm: values.realm,
      username: values.username,
      email: values.email,
      password: values.password,
    };

    await axios
      .post(baseUrl, form)
      .then((response) => {
        console.log("Registro exitoso");
        setOpenSuccess(true);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Request failed with status code 422") {
          setOpenWarning(true);
        }
      });
  };

  return (
    <div>
      <div>
        <div className={classes.root}>
          <NavBar />
        </div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {alreadyLogin()}
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
            <br></br>
            <Formik
              className={classes.form}
              initialValues={{
                realm: "",
                username: "",
                email: "",
                password: "",
                confirmPass: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => handleSubmit(values)}
            >
              {(formik) => (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Form>
                      <Field
                        label="Nombre y apellido"
                        name="realm"
                        type="text"
                      />
                      <Field
                        label="Nombre de usuario"
                        name="username"
                        type="text"
                      />
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
                      <FieldPassword
                        label="Confirmar contraseña"
                        name="confirmPass"
                        type="password"
                      />
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
                    </Form>
                  </Grid>
                </Grid>
              )}
            </Formik>
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

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

const mapDispachToProps = (dispatch) => ({
  setUserId: (id) => dispatch.userReducer.setUserId(id),
});

export default connect(mapStateToProps, mapDispachToProps)(Register);
