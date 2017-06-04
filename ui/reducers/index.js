import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userReducer from './userReducer'

// ใช้ combineReducers เพื่อรวม reducer แต่ละตัวเข้าเป็นหนึ่ง
export default combineReducers({

  userReducer
})