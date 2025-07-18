import { catchError } from "solid-js";


export default function Button(props){

    try{    
        if(typeof props.function != "function"){
            throw new Error;
    }


    }catch(e){

    }finally{
        return(
            <div>
                <h2></h2>
            </div>
    );
    }

    if(props.image){

    }
        
    
}