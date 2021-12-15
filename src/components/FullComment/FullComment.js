import axios from "axios";
import { useEffect, useState } from "react";
import style from "./FullComment.module.css";

const FullComment = ({ commentId }) => {
    const[comment, setComment] = useState("");
    useEffect(() => {
      if(commentId){
        axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((res) => setComment(res.data)) 
        .catch()
      }
     },[commentId])

     let commentDetail = <p> please select a comment !</p>
     if(commentId) commentDetail = <p>Loading ...</p>

    if(commentId) {
      commentDetail = (
        <div className={style.fullComment}>
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p> 
        </div>
      )
    }
    return commentDetail;
}
 
export default FullComment;