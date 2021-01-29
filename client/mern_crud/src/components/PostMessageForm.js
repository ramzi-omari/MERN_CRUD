import React, { useEffect, useState } from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import useForm from "./useForm";

const initialFieldValues = {
  title: "",
  message: "",
};

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  postBtn: {
    width: "50%",
  },
});

const PostMessageForm = ({ classes, ...props }) => {
  const validate = () => {
    // to check the inpute form validation
    let temp = { ...errors };
    temp.title = values.title ? "" : "this field is required";
    temp.message = values.message ? "" : "this field is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };

  var { values, setValues, handleInputChange, errors, setErrors } = useForm(
    initialFieldValues
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) window.alert("validation successed");
    else window.alert("Please insert your infos");
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
    >
      <TextField
        name="title"
        variant="outlined"
        label="Title"
        fullWidth
        value={values.title}
        onChange={handleInputChange}
        {...(errors.title && { error: true, helperText: errors.title })}
      />
      <TextField
        name="message"
        variant="outlined"
        label="Message"
        fullWidth
        multiline
        rows={4}
        value={values.message}
        onChange={handleInputChange}
        {...(errors.message && { error: true, helperText: errors.message })}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        className={classes.postBtn}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

export default withStyles(styles)(PostMessageForm);
