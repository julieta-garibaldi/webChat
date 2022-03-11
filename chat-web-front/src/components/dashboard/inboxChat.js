import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import useStyles from "../../styles/dashboard";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const baseUrl = "http://localhost:3000/mensajes-chat-webs/historial";

const InBoxChat = (props) => {
  const classes = useStyles();

  const showUnReadMessaje = (usuario) => {
    let found = props.unRead.find((unread) => unread.user_origen === usuario);
    if (found !== undefined) {
      return (
        <ListItemIcon>
          <Avatar alt="Remy Sharp" className={classes.unreadMessage}>
            {" "}
          </Avatar>
        </ListItemIcon>
      );
    } else {
      return null;
    }
  };

  const userfilter = () => {
    let usersFiltrado2;
    if (props.buscador === "") {
      usersFiltrado2 = [];
    } else {
      usersFiltrado2 = props.users.filter((u) =>
        u.username.toLowerCase().includes(props.buscador.toLowerCase())
      );
    }
    return usersFiltrado2;
  };
  const userFilt = userfilter();

  const chatfilter = () => {
    let chatFiltrado2;
    if (props.buscador === "") {
      chatFiltrado2 = [];
    } else {
      chatFiltrado2 = props.allChat.filter((m) =>
        m.mensaje.toLowerCase().includes(props.buscador.toLowerCase())
      );
    }
    return chatFiltrado2;
  };
  const chatFilt = chatfilter();

  const goToConversation = async (userO, userD) => {
    await axios
      .get(baseUrl, { params: { user_origen: userO, user_destino: userD } })
      .then((response) => {
        props.setChat([]);
        props.setChat(response.data);
        props.setForm({ ...props.form, user_destino: userD });
        props.setUserDestino(userD);
        props.changeReadMessage(userD);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  React.useEffect(() => {
    props.unReadMessage();
  }, []);

  return (
    <Grid
      item
      xs={3}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Paper square sx={{ pb: "50px" }}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
          noWrap
          className={classes.blueUsuarios}
        >
          Usuarios
        </Typography>
        <List sx={{ mb: 2 }} className={classes.content3}>
          {props.users.map((usuario) => (
            <React.Fragment key={usuario.id}>
              <ListItem
                className={classes.white}
                button
                key={usuario.id}
                onClick={() => props.showConversation(usuario.username)}
              >
                <ListItemAvatar>
                  <Avatar
                    className={classes.blue}
                    alt="Profile Picture"
                    src="/broken-image.jpg"
                  >
                    {usuario.username[0].toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={usuario.username} />
                {showUnReadMessaje(usuario.username)}
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <Divider />
      <Paper square sx={{ pb: "50px" }} className={classes.content2}>
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
            value={props.buscador}
            onChange={(e) => props.setBuscador(e.target.value)}
          />
        </div>
        <List sx={{ mb: 2 }}>
          {userFilt.map((usuario) => (
            <ListItem
              button
              key={usuario.id}
              onClick={() => props.showConversation(usuario.username)}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                  className={classes.blue}
                >
                  {usuario.username[0].toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={usuario.username} secondary={"Usuario"} />
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
      </Paper>
    </Grid>
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

export default connect(mapStateToProps, mapDispachToProps)(InBoxChat);
