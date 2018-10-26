import React from "react";
import { connect } from "react-redux";
import { List } from "antd";
import "antd/dist/antd.css";
import CommentItem from "./Comment";

class CommentList extends React.Component {
  // renderComments = () => {
  //   console.log(this.props.comments);
  //   return this.props.comments.map(comment => {
  //     return <li key={comment.id}>{comment.text}</li>;
  //   });
  // };

  render() {
    // console.log(this.props.comments);
    return (
      <React.Fragment>
        {this.props.comments.length > 0 && (
          <div>
            <h4>Comments</h4>
            <List
              style={{ width: 500, marginLeft: 100 }}
              size="small"
              bordered
              dataSource={this.props.comments}
              renderItem={comment => <CommentItem comment={comment} />}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);

// <ul className="commentList">{this.renderComments()}</ul>
//<List.Item actions={[<a>Edit</a>, <a>Delete</a>]}>
// { comment.text }
//</List.Item >
