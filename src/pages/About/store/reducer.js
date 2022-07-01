import { fromJS } from "immutable";
import * as actionTypes from './actionTypes';
const defaultState=fromJS({
    CultureList:[],
    partnerList:[]
})
const AboutReducer = (state = defaultState, action) => {
    switch (action.type) { 
        case actionTypes.INIT_ABOUT_LIST:
            console.log(action);
            return state.merge({
                CultureList: fromJS(action.data.CultureList),
                partnerList: fromJS(action.data.partnerList)
            })
        default:
    }
    return state;
}
export default AboutReducer