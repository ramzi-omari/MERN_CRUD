import React, { Fragment, useEffect, useState } from "react";
import * as actions from "../actions/postMessage";
import {
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
});

const PostMessages = ({ classes, ...props }) => {
  const [x, setX] = useState(0);

  useEffect(() => {
    props.fetchAllPostMessages();
  }, []);

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <PostMessagesForm></PostMessagesForm>
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
