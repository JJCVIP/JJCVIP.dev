/**
 * @class
 * @private
 * @extends Error
 * @classdesc An error type to indicate that a JSX component requires a prop value
 * @param message Message that the error should output to console
 * @author JJCVIP
 * @version 1.0
 */
export default class PropError extends Error{
    constructor(message){
        super(message)
        
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    }



}