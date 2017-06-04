import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE } from '../constants/AppConstants';
const initialState={
  result:0,
  value:[],
  username:'',
  password:'',
  re_password:'',
  email:''
}
export default function reducer(state=initialState,action){
  if(action.type =="LOGIN"){
    state={
        username:action.yaname,
        password:action.yapass
    }
  }
  if (action.type == "REGISTER"){
     state={
        username:action.yaname,
        password:action.yapass,
        re_password:action.yarepass,
        email:action.yaemail
    }
  }
  return state;
}