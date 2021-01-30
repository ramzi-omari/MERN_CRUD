import React, { useEffect, useState } from "react";
import * as actions from "../actions/postMessage";
import { withStyles, TextField, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import ButterToast, { Cinnamon } from "butter-toast";
import { AssignmentTurnedIn } from "@material-ui/icons";
import { AssignmentLate } from "@material-ui/icons";

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
  useEffect(() => {
    if (props.currentId != 0) {
      setValues({
        ...props.postMessageList.find((x) => x._id == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

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

  var {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  } = useForm(initialFieldValues, props.setCurrentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const onSuccess = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Post Box"
            content="Submitted Successfully"
            scheme={Cinnamon.Crisp.SCHEME_PURPLE}
            icon={<AssignmentTurnedIn></AssignmentTurnedIn>}
          />
        ),
      });
      resetForm();
    };
    const onFailed = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Post Box"
            content="Please insert your infos"
            scheme={Cinnamon.Crisp.SCHEME_RED}
            icon={<AssignmentLate></AssignmentLate>}
          />
        ),
      });
    };
    if (validate()) {
      if (props.currentId == 0) props.createPostMessage(values, onSuccess);
      else props.updatePostMessage(props.currentId, values, onSuccess);
    } else {
      props.createPostMessage(values, onFailed);
    }
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

const mapStatetoProps = (state) => ({
  postMessageList: state.postMessage.list,
});

const mapActionToProps = {
  createPostMessage: actions.create,
  updatePostMessage: actions.update,
};

export default connect(
  mapStatetoProps,
  mapActionToProps
)(withStyles(styles)(PostMessageForm));
