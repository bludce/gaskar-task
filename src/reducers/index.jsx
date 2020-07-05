import { combineReducers } from 'redux';
import projects from './projects'
import isAuth from './user'

const rootReducer = combineReducers({ projects, isAuth });

export default rootReducer;