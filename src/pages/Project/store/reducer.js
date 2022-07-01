import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    Commercial: [], 
    Commercont:[],
    Residential:[],
    Residecont:[],
    Property:[],
    Propercont:[]
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
        default:
    }
    return state;
}
export default project