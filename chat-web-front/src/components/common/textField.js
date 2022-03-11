import React from "react";
import { ErrorMessage, useField } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export const Field = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          {...field}
          {...props}
          autoComplete="off"
          variant="outlined"
          fullWidth
          label={label}
          error={meta.touched && meta.error ? true : false}
        />
        <ErrorMessage name={field.name}>
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Grid>
    </Grid>
  );
};
