import axios from 'axios'
import * as actionTypes from './actionTypes'
const projectList = (data) => ({
    type: actionTypes.PROJECT_LIST,
    data
})
export const getProjectList = () => {
    return async (dispatch) => {
        let { data: res } = await axios.get('http://localhost:3004/projectList')
        console.log(res.data);
        if (res.status !== 200) return
        dispatch(projectList(res.data))
    }
}
