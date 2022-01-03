import react from "react";
import blogData from "../data/blog";

function About(props){
    return (
        <div>
        <aside>
            <img>{props.image}</img>
            
        </aside>
          <p>{blogData.about}</p>
          </div>
    )
};


export default About