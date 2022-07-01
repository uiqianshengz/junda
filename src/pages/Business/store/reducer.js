import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    Estate: [], 
    ServicePurposes:[],
    ServiceStandards:[],
    before: [],
    sell: [],
    attract: [],
    operation: [],
    classify:[],
    Media:[],
    Invest:[]
})
const estate = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ESTATE_LIST:
            return state.merge({
                Estate: fromJS(action.data.Estate),
                ServicePurposes:fromJS(action.data.ServicePurposes),
                ServiceStandards:fromJS(action.data.ServiceStandards),
                before: fromJS(action.data.before),
                sell: fromJS(action.data.sell),
                attract: fromJS(action.data.attract),
                operation: fromJS(action.data.operation),
                classify:fromJS(action.data.classify),
                Media:fromJS(action.data.Media),
                Invest:fromJS(action.data.Invest)
            })
        default:
    }
    return state;
}
export default estate