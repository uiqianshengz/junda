import axios from "axios"
import * as actionTypes from "./actionTypes"
const NewsDataLi=(data)=>({
    type:actionTypes.NEWS_LIST,
    data
})
export const NewsDataPress=()=>{
    return async (dispatch)=>{
        let {data:res}=await axios.get('http://localhost:3004/newsList')
        console.log(res);
        if(res.status!==200)return;
        dispatch(NewsDataLi(res.data))
    }
}