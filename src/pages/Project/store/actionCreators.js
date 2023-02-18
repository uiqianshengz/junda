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
const HouseDetailsList = (data) => ({
    type: actionTypes.HOUSE_DETAILS_LIST,
    data
})
const PropertyDetailsList = (data) => ({
    type: actionTypes.PROPERTY_DETAILS_LIST,
    data
})
export const getProjectList = () => {
    return async (dispatch) => {
        let { data: res } = await axios.get('http://47.115.217.72:3010/projectList')
        if (res.status !== 200) return
        dispatch(projectList(res.data))
    }
}
export const getBusDetailsList = (id) => {
    return async (dispatch) => {
        let { data: res } = await axios.get('http://47.115.217.72:3010/BusDetails?id=' + id)
        dispatch(BusDetailsList(res))
    }
}
export const getHouseDetailsList = (id) => {
    return async (dispatch) => {
        let { data: res } = await axios.get('http://47.115.217.72:3010/HouseDetails?id=' + id)
        dispatch(HouseDetailsList(res))
    }
}
export const getPropertyDetailsList = (id) => {
    return async (dispatch) => {
        let { data: res } = await axios.get('http://47.115.217.72:3010/PropertyDetails?id=' + id)
        dispatch(PropertyDetailsList(res))
    }
}