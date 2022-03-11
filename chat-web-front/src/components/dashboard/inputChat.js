import React from "react";
import { connect } from "react-redux";
import useStyles from "../../styles/dashboard";
import Send from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const InputChat = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.chatTextBoxContainer}>
      <TextField
        id="chattextbox"
        autoComplete="off"
        placeholder="Escriba su mensaje ..."
        className={classes.chatTextBox}
        type="text"
        name="mensj"
        fullWidth
        value={props.mensj}
        onChange={(e) => props.setMensj(e.target.value)}
      ></TextField>
      <Send
        onClick={(e) => props.handleSubmit(e)}
        className={classes.sendBtn}
      ></Send>
      <IconButton
        edge="start"
        className={classes.sendBtn}
        color="inherit"
        aria-label="menu"
      >
        <AttachFileIcon />
        <input type="file" onChange={(e) => props.setFile(e.target.files[0])} />
      </IconButton>
      <Send onClick={props.insertarArchivos} className={classes.sendBtn}></Send>
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

export default connect(mapStateToProps, mapDispachToProps)(InputChat);
