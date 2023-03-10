import axios from "axios"
import * as actionTypes from "./actionTypes"
const NewsDataLi=(data)=>({
    type:actionTypes.NEWS_LIST,
    data
})
const NewsDetailsList = (data) => ({
    type: actionTypes.NEWS_DETAILS_LIST,
    data
})
export const NewsDataPress=()=>{
    return async (dispatch)=>{
        let {data:res}=await axios.get('http://47.115.217.72:3010/newsList')
        console.log(res);
        if(res.status!==200)return;
        dispatch(NewsDataLi(res.data))
    }
}
export const getNewsDetailsList=(id)=>{
    return async(dispatch)=>{
       let {data:res}=await axios.get('http://47.115.217.72:3010/newsDetails?id='+id)
       dispatch(NewsDetailsList(res))
    }
}