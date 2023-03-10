import axios from 'axios'
import * as actionTypes from './actionTypes'
const initAboutList=(data)=>({
    type:actionTypes.INIT_ABOUT_LIST,
    data
})
export const getAboutList = () => {
    return async (dispatch) => {
        let { data: res } = await axios.get('http://47.115.217.72:3010/aboutList') 
        console.log(res);
        if (res.status !== 200) return
        //使用InitAboutList将ajax结果发给reducer
        dispatch(initAboutList(res.data))
    }
}
