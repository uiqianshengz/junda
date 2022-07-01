import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    buttonShow:false,
    aboutList:[],
    businessList:[],
    newsList:[],
    projectList:[],
})
const bbb = (state = defaultState, action) => {
    switch (action.type) { 
        case actionTypes.GET_BUTTON_SHOW:
            // console.log(action.data.articleList);
            return state.set('buttonShow', true)

        case actionTypes.GET_BUTTON_HIDE:
            // console.log(action.data.articleList);
            return state.set('buttonShow', false)
        
        case actionTypes.INIT_HOME_LIST:
            console.log(action);
            return state.merge({
                aboutList: fromJS(action.data.aboutList),
                businessList: fromJS(action.data.businessList),
                newsList: fromJS(action.data.newsList),
                projectList: fromJS(action.data.projectList),
            })
        default:
    }
    return state;
}
export default bbb