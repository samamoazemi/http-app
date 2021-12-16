import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment"; 
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import style from "./Discussion.module.css";

const Discussion = () => {
    const[comments, setComments] = useState(null);
    const[selectedId, setSelectedId] = useState(null)

    useEffect(() => {
    // async function getComments()
     const getComments = async () => {
        try {
         const {data} = await axios.get(
             "http://localhost:3001/comments"
             )
             setComments(data.slice(0, 4))
        } catch (error) {
            console.log(error)
        }
     }
    getComments()

    },[]);

    const selectCommentHandler = (id) => {
        setSelectedId(id)

    }
    
    // 4 comment => 3 comment => setComment(res.data) => clickHandler()

    return ( 
        <main className={style.discussion}>
            <section>
              {comments ? (
                  comments.map((c) => (
                    <Comment 
                      key={c.id} 
                      name={c.name} 
                      email={c.email} 
                      onClick={() => selectCommentHandler(c.id)}
                    />
                  ))
                ) : (
                 <p>Loading ...</p>
                )}
            </section>
            <section>
                <FullComment commentId={selectedId} />
            </section>
            <section>
                <NewComment />
            </section>
        </main>
     );
}
 
export default Discussion;