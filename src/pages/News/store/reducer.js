import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    Newsbox:[],
    ShineData:[]
})
const newsa = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.NEWS_LIST:
            return state.merge({
                Newsbox: fromJS(action.data.Newsbox),
                ShineData: fromJS(action.data.ShineData)
            })
        default:
    }
    return state;
}
export default newsa