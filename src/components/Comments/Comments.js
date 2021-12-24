import { useEffect, useState } from "react";
import Comment from "./Comment/Comment"; 
import style from "./Comments.module.css";
import { toast } from 'react-toastify';
import { getAllComments } from "../../services/getAllCommentsService";
import { Link } from "react-router-dom";

const Comments = () => {
    const[comments, setComments] = useState(null);
    const[error, setError] = useState(false);

    useEffect(() => {
    // async function getComments()
     const getComments = async () => {
        try {
         const {data} = await getAllComments();
         setComments(data)
        } catch (error) {
            console.log(error)
            setError(true)
        }
     }
    getComments()

    },[]);

    const renderComments = () => {
        let renderValue = <p>Loading ...</p>
        if(error){
            renderValue = <p>fetching data faild !</p>
            toast.error("there is an error !");
        }
        if(comments && !error){
            renderValue =  comments.map((c) => (
                <Link to={`/comment/${c.id}`} key={c.id} >
                 <Comment 
                  name={c.name} 
                  email={c.email}
                />
                </Link>
              ))
        }
        return renderValue;
    }

    return <section>{renderComments()}</section>;
}
 
export default Comments;