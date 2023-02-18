import axios from 'axios'
import * as actionTypes from './actionTypes'
const estateList = (data) => ({
    type: actionTypes.ESTATE_LIST,
    data
})
export const getEstateList = () => {
    return async (dispatch) => {
        let { data: res } = await axios.get('http://47.115.217.72:3010/estateList')
        //    console.log(res.data.before);
        if (res.status !== 200) return
        dispatch(estateList(res.data))
    }
}
