import React from "react";
import blogData from "../data/blog";
import Header from "./header"
import About from "./about"
import ArticleList from "./articleList"
import Article from "./article"

console.log(blogData);
const {about,image,name,posts} = blogData
function App(props) {
  
  return (
    <div className="App">
      <Header Blogname={name} />
      <About  />
      <ArticleList />
      <Article />
    </div>
  );
}
console.log()
export default App;
