import axios from "axios";
import { useEffect, useState } from "react";
import style from "./FullComment.module.css";

const FullComment = ({ commentId }) => {
    const[comment, setComment] = useState("");
    useEffect(() => {
      if(commentId){
        axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((res) =>{
          // 10 user => id : 1 => axios.delete() => 0k !  9 user => res.data : 9 user => setState()
        }) 
        .catch()
      }
     },[commentId])

     const deleteHandler = () => {
       axios
       .delete(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
       .then((res) => console.log(res.data))
       .catch((err) => console.log(err))
     }

     let commentDetail = <p> please select a comment !</p>
     if(commentId) commentDetail = <p>Loading ...</p>

    if(commentId) {
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