import axios from 'axios'
import * as actionTypes from './actionTypes'
const projectList = (data) => ({
    type: actionTypes.PROJECT_LIST,
    data
})
const BusDetailsList = (data) => ({
    type: actionTypes.BUS_DETAILS_LIST,
    data
})
export const getProjectList = () => {
    return async (dispatch) => {
        let { data: res } = await axios.get('http://localhost:3004/projectList')
        if (res.status !== 200) return
        dispatch(projectList(res.data))
    }
}
export const getBusDetailsList = (id) => {
    return async (dispatch) => {        
        let { data: res } = await axios.get('http://localhost:3004/BusDetails?id=' + id)
        dispatch(BusDetailsList(res))
    }
}