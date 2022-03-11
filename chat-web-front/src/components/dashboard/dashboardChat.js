import useStyles from "../../styles/dashboard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import NavBar from "../common/navBar";
import InboxChat from "./inboxChat";
import NavbarChat from "./navbarChat";
import MessagesChat from "./messagesChat";
import rocket from "../../assets/rocket.png";

const baseUrl = "http://localhost:3000/usuarios-chat-webs/nouser";
const baseUrl2 = "http://localhost:3000/mensajes-chat-webs/historial";
const baseUrl3 = "http://localhost:3000/mensajes-chat-webs";
const baseUrl4 =
  "http://localhost:3000/mensajes-chat-webs/historialalternativo";
const baseUrl5 = "http://localhost:3000/CargarArchivos";
const baseUrl6 = "http://localhost:3000/update-mensajes-chat-webs";
const baseUrl7 = "http://localhost:3000/unread-mensajes-chat-webs";

const DashboardChat = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [users, setUsers] = React.useState([]);
  const [chat, setChat] = React.useState([]);
  const [allChat, setAllChat] = React.useState([]);
  const [form, setForm] = React.useState({
    date_mensaje: new Date(),
    user_origen: props.username,
    usuariosChatWebId: props.id,
    mensaje: "",
    user_destino: "",
    mensaje_nuevo: true,
    esTexto: true,
  });
  const [mensj, setMensj] = React.useState("");
  const [buscadorChat, setbuscadorChat] = React.useState("");
  const [buscador, setBuscador] = React.useState("");
  const [file, setFile] = React.useState("");
  const [unRead, setUnRead] = React.useState([]);

  const notLogin = () => {
    if (!props.loggedIn) {
      history.push("/");
    }
  };

  const showAllUser = () => {
    axios
      .get(baseUrl, { params: { username: props.username } })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const unReadMessage = async () => {
    await axios
      .get(baseUrl7, { params: { user_destino: props.username } })
      .then((response) => {
        setUnRead(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const changeReadMessage = async (userparam) => {
    await axios
      .get(baseUrl6, {
        params: { user_origen: props.username, user_destino: userparam },
      })
      .then((response) => {
        console.log(response.data);
        unReadMessage();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const showConversation = async (userparam) => {
    await axios
      .get(baseUrl2, {
        params: { user_origen: props.username, user_destino: userparam },
      })
      .then((response) => {
        setChat([]);
        setChat(response.data);
        setForm({ ...form, user_destino: userparam });
        props.setUserDestino(userparam);
        changeReadMessage(userparam);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exportForm = {
      date_mensaje: new Date(),
      user_origen: props.username,
      usuariosChatWebId: props.id,
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

  const chatFiltrado = chat.filter((m) =>
    m.mensaje.toLowerCase().includes(buscadorChat.toLowerCase())
  );

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
          user_origen: props.username,
          usuariosChatWebId: props.id,
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

  React.useEffect(() => {
    notLogin();
  }, [props.loggedIn]);

  return (
    <div>
      <CssBaseline />
      <div className={classes.root}>
        <NavBar />
      </div>
      <Grid container spacing={0}>
        <InboxChat
          users={users}
          buscador={buscador}
          setBuscador={setBuscador}
          allChat={allChat}
          setChat={setChat}
          form={form}
          setForm={setForm}
          showConversation={showConversation}
          changeReadMessage={changeReadMessage}
          unReadMessage={unReadMessage}
          unRead={unRead}
        />
        <Grid item xs={9}>
          {props.user_destino != null ? (
            <div>
              <NavbarChat
                form={form}
                buscador={buscador}
                setbuscadorChat={setbuscadorChat}
              />
              <MessagesChat
                chatFiltrado={chatFiltrado}
                mensj={mensj}
                setMensj={setMensj}
                setFile={setFile}
                handleSubmit={handleSubmit}
                insertarArchivos={insertarArchivos}
              />
            </div>
          ) : (
            <img
              src={rocket}
              alt=""
              width="600"
              height="450"
              className={classes.backgroundScreen}
            ></img>
          )}
        </Grid>
      </Grid>
    </div>
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

export default connect(mapStateToProps, mapDispachToProps)(DashboardChat);
