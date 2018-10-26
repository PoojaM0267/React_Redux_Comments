import React from "react";
import { connect } from "react-redux";
import { addComment } from "../actions/CommentActions";

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }
  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    // debugger;
    e.preventDefault();
    //console.log(this.state.comment);
    const comment = this.state.comment;
    comment && this.props.addComment(comment);
    //comment && this.props.dispatch({ type: "ADD_COMMENT", comment });
    this.setState({ comment: "" });
  };

  render() {
    let input;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="my-custom-textfield"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            className="my-custom-button"
            value="Add Comment"
            onChange={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch(addComment(comment))
  };
};
//export default AddComment;
export default connect(
  null,
  mapDispatchToProps
)(AddComment);
