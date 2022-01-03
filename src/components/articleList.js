import react from "react";
import blogData from "../data/blog";
  const {posts} = blogData


function ArticleList(props){

const mapPosts = posts.map(n => <article>{n.title}</article>)
    return(

        <main>{mapPosts}</main>
    )
};


console.log()

export default ArticleList