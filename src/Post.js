import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
function Post(props){
    return(
        <div className="mb-3 mt-2">
            <div className="container ">
                <div className="d-flex justify-content-center" >
                    <div className="box1 bg-info border border-primary rounded">
                            <center>
                            <br></br>
                            <img src={props.img} width ="250px" height="250px"></img>
                            <br></br>
                            <br></br>
                            {props.name}
                            </center>
                    </div>
                </div>
            </div>
       </div>
      
    )
}
export default Post;