let nextCommentId = 0;
export const addComment = text => ({
  type: "ADD_COMMENT",
  id: nextCommentId++,
  text
});

export const editComment = newComment => ({
  type: "EDIT_COMMENT",
  newComment
});

export const deleteComment = commentId => ({
  type: "DELETE_COMMENT",
  commentId
});
