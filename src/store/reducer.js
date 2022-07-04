//导入合并子仓库的方法
import { combineReducers } from 'redux-immutable';
//导入home子仓库到总仓库
import HomeReducer from '../pages/Home/store/reducer';
//导入about子仓库到总仓库
import AboutReducer from '../pages/About/store/reducer';
//导入business子仓库到总仓库
import BusinessReducer from '../pages/Business/store/reducer';
//导入news子仓库到总仓库
import NewsReducer from '../pages/News/store/reducer';
//导入project子仓库到总仓库
import ProjectReducer from '../pages/Project/store/reducer';
//整合子仓库到总仓库进行管理
export default combineReducers({
    home:HomeReducer,
    about:AboutReducer,
    business:BusinessReducer,
    news:NewsReducer,
    project:ProjectReducer,
})