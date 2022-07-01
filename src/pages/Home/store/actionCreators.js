import axios from 'axios'
import * as actionTypes from './actionTypes'
const initHomeList=(data)=>({
    type:actionTypes.INIT_HOME_LIST,
    data
})
export const getButtonShow = () => ({
    type: actionTypes.GET_BUTTON_SHOW
})
export const getButtonHide = () => ({
    type: actionTypes.GET_BUTTON_HIDE
})
export const getHomeList = () => {
    return async (dispatch) => {
        let { data: res } = await axios.get('/api/homeList.json')
        if (res.status !== 200) return
        //使用InitAboutList将ajax结果发给reducer
        dispatch(initHomeList(res.data))
    }
}
