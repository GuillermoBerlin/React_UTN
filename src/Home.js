import React, {Component} from "react";
import Productos from "./Productos";

class Home extends Component{
    render(){ 
        return(
            <div>
                <div>  
                    <p>HOME</p>
                    
                </div>
                <div>
                    <Productos/>
                </div>
            </div>    
        )
    }
}

export default Home