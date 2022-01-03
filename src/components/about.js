import react from "react";
import blogData from "../data/blog";

function About(props){
    return (
        <div>
        <aside>
            <img src="https://via.placeholder.com/215" alt="blog logo"></img>
            
        </aside>
          <p>{blogData.about}</p>
          </div>
    )
};


export default About