import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment"; 
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import style from "./Discussion.module.css";

const Discussion = () => {
    const[comments, setComments] = useState(null);

// how to get Data?
// 1. useEffect () => http
// 2. CDM => get

useEffect(() => {

  axios
   .get("https://jsonplaceholder.typicode.com/comments")
   .then((response) => {
    //   console.log(response.data);
    setComments(response.data.slice(0, 4));
    })
   .catch((error) => {
    //    console.log(error);
    })
    
},[]);

    return ( 
        <main className={style.discussion}>
            <section>
              {comments ? (
                  comments.map((c) => (
                    <Comment key={c.id} name={c.name} email={c.email} />
                  ))
                ) : (
                 <p>Loading ...</p>
                )}
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