import React from "react";
import rea from "../assets/react.svg"

const Cv = ()=>{
    return(
        <>
        <div className="cv-container">
            <div className="left-con">
            <div className="img-con">
                <img src={rea} width={"100%"} height={"100%"} />
            </div>
            <div className="content">
                <h2>Ahiesha</h2>
                <div className="line"></div>
                <p>Frontend Developer(React)</p>
            </div>
            <div className="details-con">
                <h2>Details</h2>
                <ul>
                    <li><span>Address:</span>Kharian,Pakistan</li>
                    <li><span>Email:</span>ahiesha515@gmail.com</li>
                    <li><span>Phone:</span>03304367404</li>

                </ul>
            </div>
            <div className="=skill-con">

                <h2>Skills</h2>
                <div className="skill-wrap">
                    <h5>CSS</h5>
                    <h5>Html</h5>
                    <h5>JavaScript</h5>
                    <h5>React Js</h5>
                </div>
            </div>
            </div>
            <div className="right-con">
                <h2>Profile</h2>
                <h5>Analyzing existing programs for modification purposes.
                     Researching and designing new software systems, websites, programs, and applications. Writing and implementing, clean, scalable code. Troubleshooting and debugging code. Verifying and deploying software systems.</h5>
                     <h2>Education</h2>
                     <h5>Masters in Information Technology</h5>
                     <h6>2020-2021</h6>
                
            </div>
                       

            

        </div>
        </>
       
    )
    
        
        
         



           

        
    
}

export default Cv;