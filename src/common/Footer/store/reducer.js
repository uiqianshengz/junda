import { fromJS } from "immutable";
const defaultState=fromJS({
    TopList:[],
    articleList:[],
    imgList:[],
    RecommendList:[],
    writerList:[]
})
export default (state=defaultState,action)=>{
    
    return state
}