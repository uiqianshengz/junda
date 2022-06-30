import axios from "axios"
import * as actionTypes from "./actionTypes"
const NewsDataLi=(data)=>({
    type:actionTypes.NEWS_LIST,
    data
})
export const NewsDataPress=()=>{
    return async (dispatch)=>{
        let {data:res}=await axios.get('/api/newsList.json')
        console.log(res);
        if(res.status!==200)return;
        dispatch(NewsDataLi(res.data))
    }
}