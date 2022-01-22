import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { lightBlue } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { fade, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import axios from "axios";
import React from "react";
import { connect } from "react-redux";

const baseUrl = "http://localhost:3000/usuarios-chat-webs/nouser";
const baseUrl2 = "http://localhost:3000/mensajes-chat-webs/historial";
const baseUrl3 = "http://localhost:3000/mensajes-chat-webs";
const baseUrl4 =
  "http://localhost:3000/mensajes-chat-webs/historialalternativo";
const baseUrl5 = "http://localhost:3000/CargarArchivos";

const drawerWidth = 240;
var moment = require("moment");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  blue: {
    color: theme.palette.getContrastText(lightBlue[600]),
    backgroundColor: lightBlue[600],
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Conversacion = (props) => {
  const classes = useStyles();
  const [users, setUsers] = React.useState([]);
  const [chat, setChat] = React.useState([]);
  const [allChat, setAllChat] = React.useState([]);
  const [form, setForm] = React.useState({
    date_mensaje: new Date(),
    user_origen: props.user,
    usuariosChatWebId: props.id_usuario,
    mensaje: "",
    user_destino: "",
    mensaje_nuevo: true,
    esTexto: true,
  });
  const [mensj, setMensj] = React.useState("");
  const [buscadorChat, setbuscadorChat] = React.useState("");
  const [buscador, setBuscador] = React.useState("");
  const [file, setFile] = React.useState("");

  const notLogin = () => {
    if (!props.loggedIn) {
      window.location.href = "./";
    }
  };

  const showAllUser = () => {
    axios
      .get(baseUrl, { params: { user: props.user } })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showConversation = async (userparam) => {
    await axios
      .get(baseUrl2, {
        params: { user_origen: props.user, user_destino: userparam },
      })
      .then((response) => {
        setChat([]);
        setChat(response.data);
        setForm({ ...form, user_destino: userparam });
        props.setUserDestino(userparam);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exportForm = {
      date_mensaje: new Date(),
      user_origen: props.user,
      usuariosChatWebId: props.id_usuario,
      mensaje: mensj,
      user_destino: props.user_destino,
      mensaje_nuevo: true,
      esTexto: true,
    };
    await axios
      .post(baseUrl3, exportForm)
      .then((response) => {
        showConversation(form.user_destino);
        setMensj("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const goToConversation = async (userO, userD) => {
    await axios
      .get(baseUrl2, { params: { user_origen: userO, user_destino: userD } })
      .then((response) => {
        setChat([]);
        setChat(response.data);
        setForm({ ...form, user_destino: userD });
        props.setUserDestino(userD);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const cerrarSesion = () => {
    props.setLogOut();
    window.location.href = "./";
  };

  const chatFiltrado = chat.filter((m) =>
    m.mensaje.toLowerCase().includes(buscadorChat.toLowerCase())
  );

  const userfilter = () => {
    let usersFiltrado2;
    if (buscador === "") {
      usersFiltrado2 = [];
    } else {
      usersFiltrado2 = users.filter((u) =>
        u.user.toLowerCase().includes(buscador.toLowerCase())
      );
    }
    return usersFiltrado2;
  };
  const userFilt = userfilter();

  const allChatFilter = async () => {
    await axios
      .get(baseUrl4, {
        params: { user_origen: props.user },
      })
      .then((response) => {
        setAllChat([]);
        setAllChat(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const chatfilter = () => {
    let chatFiltrado2;
    if (buscador === "") {
      chatFiltrado2 = [];
    } else {
      chatFiltrado2 = allChat.filter((m) =>
        m.mensaje.toLowerCase().includes(buscador.toLowerCase())
      );
    }
    return chatFiltrado2;
  };
  const chatFilt = chatfilter();

  const insertarArchivos = async () => {
    const fd = new FormData();
    fd.append("file", file);
    await axios
      .post(baseUrl5, fd)
      .then((response) => {
        console.log(response.data);
        setFile("");
        const formImage = {
          date_mensaje: new Date(),
          user_origen: props.user,
          usuariosChatWebId: props.id_usuario,
          mensaje: response.data.filename,
          user_destino: props.user_destino,
          mensaje_nuevo: true,
          esTexto: false,
        };
        axios
          .post(baseUrl3, formImage)
          .then((response) => {
            showConversation(form.user_destino);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  React.useEffect(() => {
    notLogin();
    showAllUser();
    allChatFilter();
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            CHAT APP
          </Typography>
          <Button color="inherit" onClick={() => cerrarSesion()}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <Typography variant="h6" noWrap className={classes.title}>
              Usuarios
            </Typography>
            {users.map((usuario) => (
              <ListItem
                button
                key={usuario.id_usuario}
                onClick={() => showConversation(usuario.user)}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                    className={classes.blue}
                  >
                    {usuario.user[0].toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={usuario.user} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar en ChatWeb…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={buscador}
              onChange={(e) => setBuscador(e.target.value)}
            />
          </div>
          <List>
            {userFilt.map((usuario) => (
              <ListItem
                button
                key={usuario.id_usuario}
                onClick={() => showConversation(usuario.user)}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                    className={classes.blue}
                  >
                    {usuario.user[0].toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={usuario.user} secondary={"Usuario"} />
              </ListItem>
            ))}
          </List>
          <List>
            {chatFilt.map((sms) => (
              <ListItem
                button
                key={sms.id_mensaje}
                onClick={() =>
                  goToConversation(sms.user_origen, sms.user_destino)
                }
              >
                <ListItemText
                  primary={sms.mensaje}
                  secondary={
                    "De" +
                    " " +
                    sms.user_origen +
                    " " +
                    "a" +
                    " " +
                    sms.user_destino
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <div>
          <Toolbar className={classes.blue}>
            <Typography variant="h6" noWrap className={classes.title}>
              Conversacion con {form.user_destino}
            </Typography>
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
                value={buscadorChat}
                onChange={(e) => setbuscadorChat(e.target.value)}
              />
            </div>
          </Toolbar>
        </div>
        {chatFiltrado.map((sms) => {
          if (sms.user_origen === form.user_origen) {
            if (sms.esTexto) {
              return (
                <div key={sms.id_mensaje}>
                  <Typography component="p" align="left">
                    {sms.user_origen}:{sms.mensaje}
                    <Typography variant="caption" display="block" gutterBottom>
                      {moment(sms.date_mensaje).format("DD/MM/YYYY HH:mm")}
                    </Typography>
                  </Typography>
                  <br />
                </div>
              );
            } else {
              return (
                <div key={sms.id_mensaje}>
                  <Typography component="p" align="left">
                    {sms.user_origen}:
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      value={sms.mensaje}
                      onClick={(e) => {
                        e.preventDefault();
                        var baseUrl6 =
                          "http://localhost:3000/archivo?filename=" +
                          sms.mensaje;
                        window.location.href = baseUrl6;
                      }}
                    >
                      {sms.mensaje}
                    </Button>
                    <Typography variant="caption" display="block" gutterBottom>
                      {moment(sms.date_mensaje).format("DD/MM/YYYY HH:mm")}
                    </Typography>
                  </Typography>
                  <br />
                </div>
              );
            }
          } else {
            if (sms.esTexto) {
              return (
                <div key={sms.id_mensaje}>
                  <Typography align="right">
                    {sms.user_origen}:{sms.mensaje}
                    <Typography variant="caption" display="block" gutterBottom>
                      {moment(sms.date_mensaje).format("DD/MM/YYYY HH:mm")}
                    </Typography>
                  </Typography>
                  <br />
                </div>
              );
            } else {
              return (
                <div key={sms.id_mensaje}>
                  <Typography component="p" align="right">
                    {sms.user_origen}:
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      value={sms.mensaje}
                      onClick={(e) => {
                        e.preventDefault();
                        var baseUrl6 =
                          "http://localhost:3000/archivo?filename=" +
                          sms.mensaje;
                        window.location.href = baseUrl6;
                      }}
                    >
                      {sms.mensaje}
                    </Button>
                    <Typography variant="caption" display="block" gutterBottom>
                      {moment(sms.date_mensaje).format("DD/MM/YYYY HH:mm")}
                    </Typography>
                  </Typography>
                  <br />
                </div>
              );
            }
          }
        })}
        <Grid item xs={12}>
          <Paper>
            <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <TextField
                  type="text"
                  name="mensj"
                  fullWidth
                  id="mensj"
                  label="Escriba su mensaje"
                  value={mensj}
                  onChange={(e) => setMensj(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<Icon>send</Icon>}
                >
                  Enviar Mensaje
                </Button>
                <br />
                <div className="input-field">
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    <AttachFileIcon />
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </IconButton>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                    onClick={insertarArchivos}
                  >
                    Enviar Archivo
                  </Button>
                </div>
              </div>
            </form>
          </Paper>
        </Grid>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  id_usuario: state.userReducer.id_usuario,
  user: state.userReducer.user,
  loggedIn: state.userReducer.loggedIn,
  user_destino: state.userReducer.user_destino,
});

const mapDispachToProps = (dispatch) => ({
  setLogOut: () => dispatch.userReducer.setLogOut(),
  setUserDestino: (user_destino) =>
    dispatch.userReducer.setUserDestino(user_destino),
});

export default connect(mapStateToProps, mapDispachToProps)(Conversacion);
