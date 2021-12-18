import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment"; 
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import style from "./Discussion.module.css";
import { toast } from 'react-toastify';

const Discussion = () => {
    const[comments, setComments] = useState(null);
    const[selectedId, setSelectedId] = useState(null);
    const[error, setError] = useState(false);

    useEffect(() => {
    // async function getComments()
     const getComments = async () => {
        try {
         const {data} = await axios.get("http://localhost:3001/comments")
         console.log(data);
            
             setComments(data)
        } catch (error) {
            // console.log(error)
            setError(true)
        }
     }
    getComments()

    },[]);

    const selectCommentHandler = (id) => {
        setSelectedId(id)

    }

    const renderComments = () => {
        let renderValue = <p>Loading ...</p>
        if(error){
            renderValue = <p>fetching data faild !</p>
            toast.error("there is an error !");
        }
        if(comments && !error){
            renderValue =  comments.map((c) => (
                <Comment 
                  key={c.id} 
                  name={c.name} 
                  email={c.email} 
                  onClick={() => selectCommentHandler(c.id)}
                />
              ))
        }
        return renderValue;
    }

    return ( 
        <main className={style.discussion}>
            <section>
             {renderComments()}
            </section>
            <section>
                <FullComment commentId={selectedId} setComments={setComments}/>
            </section>
            <section>
                <NewComment setComments={setComments} />
            </section>
        </main>
     );
}
 
export default Discussion;