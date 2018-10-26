const comments = (state = [], action) => {
  //console.log(state);
  switch (action.type) {
    case "ADD_COMMENT":
      // console.log(action.text);
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];

    case "DELETE_COMMENT":
      return state.filter((data, i) => data.id !== action.commentId);

    case "EDIT_COMMENT":
      //debugger;
      //console.log(state);
      return state.map(comment => {
        return comment.id === action.newComment.id
          ? action.newComment
          : comment;
      });

    default:
      return state;
  }
};

export default comments;
