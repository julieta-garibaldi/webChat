import React from "react";
import { connect } from "react-redux";
import * as moment from "moment";
import "moment/locale/es";
import useStyles from "../../styles/dashboard";
import InputChat from "./inputChat";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const MessagesChat = (props) => {
  const classes = useStyles();
  moment.locale("es");

  const getMessageClass = (senderEmail) => {
    return senderEmail === props.username
      ? classes.userSent
      : classes.friendSent;
  };
  return (
    <div>
      <main id="chatview-container" className={classes.content}>
        {props.chatFiltrado.map((sms) => {
          if (sms.esTexto) {
            return (
              <div
                key={sms.id_mensaje}
                className={getMessageClass(sms.user_origen)}
              >
                <Typography
                  component="p"
                  display="block"
                  gutterBottom
                  sx={{ fontSize: 34, fontWeight: "medium" }}
                >
                  {sms.mensaje}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {moment(sms.date_mensaje).format("LL, HH:mm") +
                    "." +
                    " " +
                    sms.user_origen}
                </Typography>
              </div>
            );
          } else {
            return (
              <div
                key={sms.id_mensaje}
                className={getMessageClass(sms.user_origen)}
              >
                <Typography component="p">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    value={sms.mensaje}
                    onClick={(e) => {
                      e.preventDefault();
                      var baseUrl6 =
                        "http://localhost:3000/archivo?filename=" + sms.mensaje;
                      window.location.href = baseUrl6;
                    }}
                  >
                    {sms.mensaje}
                  </Button>
                  <Typography variant="caption" display="block" gutterBottom>
                    {moment(sms.date_mensaje).format("LL, HH:mm") +
                      "." +
                      " " +
                      sms.user_origen}
                  </Typography>
                </Typography>
                <br />
              </div>
            );
          }
        })}
      </main>
      <InputChat
        mensj={props.mensj}
        setMensj={props.setMensj}
        setFile={props.setFile}
        handleSubmit={props.handleSubmit}
        insertarArchivos={props.insertarArchivos}
      />
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

export default connect(mapStateToProps, mapDispachToProps)(MessagesChat);
