import { GM, GN } from "./message.action";

let initialState = {
  msg: "hello"
}

let messageReducer = (state = initialState, action ) =>{
switch(action.type){
  case 'GM' :
     return {msg: "Good Morning"}
  case 'GN' :
     return {msg: "good Night"}
  default:
     return state;
}
}

export {messageReducer}