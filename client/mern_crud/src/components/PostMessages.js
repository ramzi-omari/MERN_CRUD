import React, { Fragment, useEffect, useState } from "react";
import * as actions from "../actions/postMessage";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import { connect } from "react-redux";
import PostMessagesForm from "./PostMessageForm";

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(3),
    // 3 * 8px
    padding: theme.spacing(2),
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
});

const PostMessages = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllPostMessages();
  }, []);

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <PostMessagesForm {...{ currentId, setCurrentId }}></PostMessagesForm>
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <List>
            {props.postMessageList.map((record, index) => {
              return (
                <Fragment key={index}>
                  <ListItem>
                    <ListItemText>
                      <Typography variant="h5">{record.title}</Typography>
                      <div>{record.message}</div>
                      <div className={classes.actionDiv}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          className={classes.smMargin}
                          onClick={() => setCurrentId(record._id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          className={classes.smMargin}
                        >
                          Delete
                        </Button>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <Divider component="li"></Divider>
                </Fragment>
              );
            })}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStatetoProps = (state) => ({
  postMessageList: state.postMessage.list,
});

const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
};

export default connect(
  mapStatetoProps,
  mapActionToProps
)(withStyles(styles)(PostMessages));
