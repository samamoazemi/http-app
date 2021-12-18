import axios from "axios";
import { useEffect, useState } from "react";
import style from "./FullComment.module.css";

const FullComment = ({ commentId, setComments }) => {
    const[comment, setComment] = useState(null);

    useEffect(() => {
      if(commentId){
        axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setComment(res.data)) 
        .catch()
      }
     },[commentId])

     const deleteHandler = async () => {
      try{
          await axios.delete(`http://localhost:3001/comments/${commentId}`);
          const {data} = await axios.get("http://localhost:3001/comments");
          console.log(data)
          setComments(data);
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