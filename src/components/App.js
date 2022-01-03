import React from "react";
import blogData from "../data/blog";
import Header from "./header"
import About from "./about"
import ArticleList from "./articleList"
import Article from "./article"

console.log(blogData);
const {about,image,name} = blogData
function App(props) {
  
  return (
    <div className="App">
      <Header Blogname={about} />
      <About logo={image} />
      <ArticleList ArticleList="Im the articlelist component" />
      <Article Article="Im the article" />
    </div>
  );
}
console.log(blogData)
export default App;
