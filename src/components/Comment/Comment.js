import style from "./Comment.module.css"

const Comment = ({name, email}) => {
    return ( 
        <div className={style.comment}>
            <p>name : {name}</p>
            <p>email : {email}</p>
        </div>
     );
}
 
export default Comment;