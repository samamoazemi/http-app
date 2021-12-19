import axios from "axios";
import { useEffect, useState } from "react";
import style from "./FullComment.module.css";
import { deleteComment } from "../../services/deleteCommentService";
import { getAllComments } from "../../services/getAllCommentsService";
import { getOneComment } from "../../services/getOneCommentService";

const FullComment = ({ commentId, setComments, setSelectedId }) => {
    const[comment, setComment] = useState(null);

    useEffect(() => {
      if (commentId) {
        getOneComment(commentId)
         .then((res) => setComment(res.data)) 
         .catch()
      }
     },[commentId])

     const deleteHandler = async () => {
      try{
          await deleteComment(commentId);
          const {data} = await getAllComments();
          console.log(data)
          setComments(data)
          setSelectedId(null)
          setComment(null)
      }
      catch(error){}
  };

  let commentDetail = <p> please select a comment</p>;

  if(commentId) commentDetail =  <p>loading ...</p>;

    if(comment) {
      commentDetail = (
        <div className={style.fullComment}>
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p> 
        <button onClick={deleteHandler}>Delete</button>
        </div>
      )
    }
    return commentDetail;
}
 
export default FullComment;