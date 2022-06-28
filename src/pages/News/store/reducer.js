import { fromJS } from "immutable";
import * as actionTypes from './actionTypes';
const defaultState=fromJS({
    TopList:[]
})
export default (state=defaultState,action)=>{
    return state
}