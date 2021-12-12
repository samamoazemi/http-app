import Comment from "../../components/Comment/Comment"; 
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import style from "./Discussion.module.css";

const Discussion = () => {
    return ( 
        <main className={style.discussion}>
            <section>
                <Comment /> 
                <Comment />
                <Comment />
            </section>
            <section>
                <FullComment />
            </section>
            <section>
                <NewComment />
            </section>
        </main>
     );
}
 
export default Discussion;