import { useState } from "react";
import SocialLink from "../components/SocialLink"
import data from "/LinkTreeData"
import { Link } from "react-router-dom";

export default function Content() {
  // console.log(data)
  const [links, setLinks] = useState(data)

  const linksHtmlContent = links.map(data => {
    return (
      <div className="btn-col">
        <a href={data.link}
         className="btn-link"
         key={data.btnId}
         id ={data.btnId}>{data.btn}</a>
      </div>
      
    )
  })


    
  return (
    <main>
      {linksHtmlContent}
        <Link to="/contact"><button className="btn-link btn">Contact Me </button></Link>
      <SocialLink />
    </main>
  );
}
