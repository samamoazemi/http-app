import style from "./Comment.module.css"

const Comment = ({name, email, onClick}) => {
    return ( 
        <div className={style.comment} onClick={onClick} >
            <p>name : {name}</p>
            <p>email : {email}</p>
        </div>
     );
}
 
export default Comment;