import React from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => {
    return (
        <>
         <p>
            404
            <br/>
            The page not found
        </p>
        <Link to="/"><p>Go to home page</p></Link>
        </>
     );
}
 
export default NotFound;