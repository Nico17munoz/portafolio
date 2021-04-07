import React from 'react';
import Javascript from '../Images/javascript.png';
import Html from '../Images/html.png';
import Css from '../Images/css.png';

const Skills =()=> {
    return(
       <div className="Skill-container">
           <h2>Skills</h2>
           <div className="Skill-conatiner2">
              <img src={Javascript} className="Icon-skill"/>
              <img src={Html} className="Icon-skill"/>
              <img src={Css} className="Icon-skill"/>
           </div>
           
       </div>

    )
}

export default Skills;