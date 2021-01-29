import React, { useEffect, useState } from "react";
import * as actions from "../actions/postMessage";
import { Grid, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import PostMessagesForm from "./PostMessageForm";

const PostMessages = (props) => {
  const [x, setX] = useState(0);

  useEffect(() => {
    props.fetchAllPostMessages();
  }, []);

  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper>
          <PostMessagesForm></PostMessagesForm>
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper>
          <div>list of post</div>
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

export default connect(mapStatetoProps, mapActionToProps)(PostMessages);
