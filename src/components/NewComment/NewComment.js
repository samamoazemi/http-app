import axios from "axios";
import { useState } from "react";
import style from "./NewComment.module.css";

const NewComment = ({setComments}) => {
    const[comment, setComment] = useState({
        name : "",
        email : "",
        content : "",
    })

    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value)
        setComment({ ...comment, [e.target.name] : e.target.value });
    }

    const postCommentHandler = () => {
        axios
        .post("http://localhost:3001/comments", {...comment, postId: 10 })
        .then((res) => axios.get("http://localhost:3001/comments"))
        .then((res) => setComments(res.data))
        .catch()
    }

    return ( 
        <div className={style.newComment}>
            <h2>Add New Comment</h2>
            <div className={style.formControl}>
                <label>name</label>
                <input type="text" onChange={changeHandler} name="name" />
            </div>
            <div  className={style.formControl}>
                <label>email</label>
                <input type="email" onChange={changeHandler} name="email" />
            </div>
            <div className={style.formControl}>
                <label>body</label>
                <input type="textarea" onChange={changeHandler} name="content" />
            </div>
            <button onClick={postCommentHandler}>Add New Comment</button>
        </div>
     );
}
 
export default NewComment;