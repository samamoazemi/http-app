import { useState } from "react";
import style from "./NewComment.module.css";
import { addNewComment } from "../../services/addNewCommentService";

const NewComment = ({history}) => {
    const[comment, setComment] = useState({
        name : "",
        email : "",
        content : "",
    })

    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value)
        setComment({ ...comment, [e.target.name] : e.target.value });
    }

     const postCommentHandler = async () => {
        try {
          await addNewComment({ ...comment, postId: 10 });
          history.push("/");
        } catch(error) {}
    };

    return (
        <div className={style.addNewCommentRow}>
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
        </div>
     );
}
 
export default NewComment;