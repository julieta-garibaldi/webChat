import { fade, makeStyles } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    minHeight: 42,
  },
  customizeToolbar: {
    color: theme.palette.getContrastText(indigo[400]),
    backgroundColor: indigo[400],
    minHeight: 50,
  },
  blueUsuarios: {
    color: theme.palette.getContrastText(indigo[400]),
    backgroundColor: indigo[400],
    minHeight: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  blue: {
    color: theme.palette.getContrastText(indigo[400]),
    backgroundColor: indigo[400],
  },
  white: {
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
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
  sendBtn: {
    color: "blue",
    cursor: "pointer",
    "&:hover": {
      color: "gray",
    },
  },
  chatTextBoxContainer: {
    position: "absolute",
    bottom: "20px",
    left: "340px",
    boxSizing: "border-box",
    overflow: "auto",
    width: "calc(95% - 250px - 70px)",
    height: "100px",
    backgroundColor: "#d3d4db",
    borderRadius: "10px",
    padding: "10px",
  },
  chatTextBox: {
    width: "calc(100% - 40px)",
    height: "20px",
    marginRight: "10px",
  },
  content: {
    height: "calc(90vh - 9s0px)",
    padding: "25px",
    marginLeft: "0px",
    marginTop: "20px",
    boxSizing: "border-box",
    overflowY: "auto",
    top: "100px",
    paddingBottom: "50px",
    width: "calc(98% - 300px)",
    position: "absolute",
    maxHeight: 380,
  },
  content2: {
    overflowY: "auto",
    maxHeight: 250,
    maxWidth: 500,
  },
  content3: {
    overflowY: "scroll",
    maxHeight: 290,
    maxWidth: 500,
  },
  userSent: {
    float: "right",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#707BC4",
    color: "white",
    minWidth: "300px",
    maxWidth: "400px",
    minHeight: "50px",
    maxHeight: "120px",
    borderRadius: "10px",
  },
  friendSent: {
    float: "left",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#3A4691",
    color: "white",
    minWidth: "300px",
    maxWidth: "500px",
    borderRadius: "10px",
    minHeight: "50px",
    maxHeight: "120px",
  },
  unreadMessage: {
    backgroundColor: "#3A4691",
    position: "relative",
    height: "10px",
    width: "10px",
    right: "10px",
  },
  backgroundScreen: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginLeft: "200px",
    marginTop: "50px",
  },
}));

export default useStyles;
