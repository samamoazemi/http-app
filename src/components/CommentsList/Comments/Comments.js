import style from "./Comments.module.css"

const Comments = ({name, email, onClick}) => {
    return ( 
        <div className={style.comment} onClick={onClick} >
            <p>name : {name}</p>
            <p>email : {email}</p>
        </div>
     );
}
 
export default Comments;