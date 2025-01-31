import React from "react";
import { Grid, makeStyles, TextField } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
    },
    padding: "0 20px",
    marginBottom: "20px",
    background: "#f8f7ff",
    lineHeight: "40px",
    borderWidth: "0",
    borderRadius: "20px",
    fontFamily: "'Roboto', sans-serif",
  },
}));

export interface TextInputProps {
  name: string;
  label: string;
  value: string | number;
  error: boolean;
  id: string;
  type: string;
  helperText: string;
  onBlur:
    | React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
}
const TextInput: React.FC<TextInputProps> = (props) => {
  const classes = useStyles();
  const {
    id,
    name,
    type,
    label,
    value,
    error,
    helperText,
    onBlur,
    onChange,
    ...other
  } = props;
  return (
    <Grid item lg={10} md={10} sm={10} xs={10} className={classes.root}>
      <TextField
        id={id}
        label={label}
        name={name}
        type={type}
        value={value}
        helperText={helperText}
        onBlur={onBlur}
        onChange={onChange}
        {...other}
        error={error}
      />
    </Grid>
  );
};
export default TextInput;
