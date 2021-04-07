import React,{Fragment} from 'react';
import Github from '../Images/github.png';
import Wwweb from '../Images/wwweb.png';
import Proyecto1 from '../Images/proyecto1.png';
import Proyecto2 from '../Images/proyecto2.png';

const Proyectos = () =>{
    return(
        <Fragment>
            <div className="Container1">
                <h2>Proyectos</h2>
              <div className="Container2">
                <img src={Proyecto1}/>
                <br/>
                <div className="Container3">
                  < button className="Img-button"><img src={Github}/></button>
                  <button className="Img-button"><img src={Wwweb}/></button>
                </div>    
              </div>
              <div className="Container2">
                <img src={Proyecto2}/>
                   <br/>
                   <div className="Container3">
                      <button className="Img-button"><img src={Github}/></button>
                      <button className="Img-button"><img src={Wwweb}/></button>
                   </div> 
              </div>
            </div>
        </Fragment>
       

    );
}

export default Proyectos;