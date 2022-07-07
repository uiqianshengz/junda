import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    Newsbox: [],
    ShineData: [],
    NewsDetails:[]
})
const newsa = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.NEWS_LIST:
            return state.merge({
                Newsbox: fromJS(action.data.Newsbox),
                ShineData: fromJS(action.data.ShineData)
            })
        case actionTypes.NEWS_DETAILS_LIST:
            console.log(action);
            return state.set('NewsDetails', fromJS(action.data));
        default:
    }
    return state;
}
export default newsa