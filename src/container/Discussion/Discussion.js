import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment"; 
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import style from "./Discussion.module.css";

const Discussion = () => {
    const[comments, setComments] = useState(null);
    const[selectedId, setSelectedId] = useState(null);
    const[error, setError] = useState(false);

    useEffect(() => {
    // async function getComments()
     const getComments = async () => {
        try {
         const {data} = await axios.get("http://localhost:3001/comments")
             setComments(data)
        } catch (error) {
            console.log(error)
            setError(true)
        }
     }
    getComments()

    },[]);

    const selectCommentHandler = (id) => {
        setSelectedId(id)

    }

    const postCommentHandler = (comment) => {
        axios
        .post("http://localhost:3001/comments", {...comment, postId: 10 })
        .then((res) => axios.get("http://localhost:3001/comments"))
        .then((res) => setComments(res.data))
        .catch()
    }
 
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
                <NewComment onAddPost={postCommentHandler} />
            </section>
        </main>
     );
}
 
export default Discussion;