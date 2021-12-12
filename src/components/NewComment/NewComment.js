import style from "./NewComment.module.css";

const NewComment = () => {
    return ( 
        <div className={style.newComment}>
            <div>
                <label>name</label>
                <input type="text"/>
            </div>
            <div>
                <label>email</label>
                <input type="email"/>
            </div>
            <div>
                <label>body</label>
                <input type="textarea"/>
            </div>
        </div>
     );
}
 
export default NewComment;