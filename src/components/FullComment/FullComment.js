import style from "./FullComment.module.css";

const FullComment = ({commentId}) => {
    console.log(commentId)
    //get comment => id => async await => get full comment data
    return ( 
        <div className={style.fullComment}>
            <p>name</p>
            <p>email</p>
            <p>body</p>
        </div>
     );
}
 
export default FullComment;