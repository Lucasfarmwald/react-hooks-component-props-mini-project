import react from "react";
import blogData from "../data/blog";

function Article(props){
    return (
        <article>
        <h3>{blogData.about}</h3>
        <small></small>
        <p></p>
        </article>
    )
};

console.log(Article)

export default Article