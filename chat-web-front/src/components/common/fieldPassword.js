import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@material-ui/core/Grid";
import { ErrorMessage, useField } from "formik";

export const FieldPassword = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl sx={{ width: "50.5ch" }} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            style={
              meta.touched && meta.error ? { color: "red" } : { color: "gray" }
            }
          >
            {label}
          </InputLabel>
          <OutlinedInput
            {...field}
            {...props}
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            autoComplete="off"
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            error={meta.touched && meta.error ? true : false}
          />
        </FormControl>
        <ErrorMessage name={field.name}>
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Grid>
    </Grid>
  );
};
