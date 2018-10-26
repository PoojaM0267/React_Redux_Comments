import React from "react";
import { connect } from "react-redux";
import { List, Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { deleteComment, editComment } from "../actions/CommentActions";

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingComment: false,
      newComment: this.props.comment.text
    };
  }

  handleClickDelete = (e, commentId) => {
    this.props.deleteComment(commentId);
  };

  handleClickEdit = e => {
    debugger;
    this.setState({
      editingComment: !this.state.editingComment
    });
  };

  handleNewCommentChange = e => {
    this.setState({ newComment: e.target.value });
  };

  handleEditSubmit = (e, commentId) => {
    //  debugger;
    e.preventDefault();
    //console.log(commentId);
    //console.log(this.state.newComment);

    if (this.state.newComment !== "") {
      const newComment = {
        id: commentId,
        text: this.state.newComment
      };
      newComment && this.props.editComment(newComment);
      this.setState({
        editingComment: !this.state.editingComment
      });
    } else {
      alert("This field cannot be empty.");
    }
  };

  render() {
    let editableComment = (
      <List.Item
        actions={[
          <Button
            type="submit"
            onClick={e => this.handleEditSubmit(e, this.props.comment.id)}
          >
            Save
          </Button>,
          <Button type="danger" onClick={e => this.handleClickEdit(e)}>
            Cancel
          </Button>
        ]}
      >
        <Form
          layout="inline"
          onSubmit={e => this.handleEditSubmit(e, this.props.comment.id)}
        >
          <Input
            style={{
              marginTop: 10,
              marginBottom: 10
              //width: 200
            }}
            type="text"
            value={this.state.newComment}
            onChange={e => this.handleNewCommentChange(e)}
            autoFocus
          />
        </Form>
      </List.Item>
    );

    let viewComment = (
      <List.Item
        actions={[
          <Button
            //style={{ verticalAlign: baseline }}
            icon="edit"
            type="primary"
            onClick={e => this.handleClickEdit(e)}
          >
            Edit
          </Button>,
          <Button
            icon="delete"
            type="danger"
            onClick={e => this.handleClickDelete(e, this.props.comment.id)}
          >
            Remove
          </Button>
        ]}
      >
        {this.props.comment.text}
      </List.Item>
    );

    return (
      <React.Fragment>
        {this.state.editingComment ? editableComment : viewComment}
      </React.Fragment>
    );
  }
}

// <input type="submit" value="Save Comment"
//   onChange={e => this.handleEditSubmit(e, this.props.comment.id)}
// />

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    editComment: newComment => dispatch(editComment(newComment))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentItem);
