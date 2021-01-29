import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";

const PostMessages = (props) => {
  const [x, setX] = useState(0);

  useEffect(() => {
    props.fetchAllPostMessages();
  }, []);

  return (
    <div>
      <h1>d</h1>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  postMessageList: state.postMessage.list,
});

const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
};

export default connect(mapStatetoProps, mapActionToProps)(PostMessages);
