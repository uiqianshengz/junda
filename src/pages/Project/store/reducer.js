import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    Commercial: [], 
    Commercont:[],
    Residential:[],
    Residecont:[],
    Property:[],
    Propercont:[],
    BusDetails:[],
    HouseDetails:[],
    PropertyDetails:[]
})
const project = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.PROJECT_LIST:
            return state.merge({
                Commercial: fromJS(action.data.Commercial),
                Commercont:fromJS(action.data.Commercont),
                Residential:fromJS(action.data.Residential),
                Residecont:fromJS(action.data.Residecont),
                Property:fromJS(action.data.Property),
                Propercont:fromJS(action.data.Propercont), 
            })
        case actionTypes.BUS_DETAILS_LIST:
            console.log(action);
            return state.set('BusDetails',fromJS(action.data));
        case actionTypes.HOUSE_DETAILS_LIST:
                console.log(action);
                return state.set('HouseDetails',fromJS(action.data));
         case actionTypes.PROPERTY_DETAILS_LIST:
                console.log(action);
                return state.set('PropertyDetails',fromJS(action.data));
        default:
    }
    return state;
}
export default project