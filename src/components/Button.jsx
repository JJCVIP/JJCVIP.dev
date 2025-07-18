import PropError from "../Errors/PropError.mjs";
import { v4 as uuidv4 } from 'uuid';

/**
 * @typedef {Object} ButtonProps
 * @property {String} name
 * @property {Function} function
 * @property {Boolean} isImage
 * @property {URL} [image]
 * @property {String} [text]
 */

/**
 * 
 * @param {ButtonProps} props 
 * @returns 
 */
export default function Button(props){
    console.log("created")
    try{  
        if (typeof props.name != "string"){
            console.log("Test")
            props.name = uuidv4()
            throw new PropError(`The Button does not have a proper name! Please give it one, temporarily asigned to ${props.name}`)
        } 
        if(typeof props.function != "function"){
            throw new PropError(`The Button named ${props.name} does not implement a function`);

        }
    }catch(e){
        console.log("error")
        console.log(e)
        if(e instanceof PropError){
            console.error( `${e.message}\n Stack Trace: \n${e.stack}`)
        }
    }finally{
        return(
            <div id={props.name+"_id"}>
                <h2 onclick={props.function(props.functionParams)}>{props.text}</h2>
            </div>
    );
    }
}