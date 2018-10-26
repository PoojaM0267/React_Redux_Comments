import React from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Some magic happen!</h2>
        <AddComment />
        <hr />
        <CommentList />
      </div>
    );
  }
}

export default App;
