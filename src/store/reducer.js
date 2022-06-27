//导入合并子仓库的方法
import { combineReducers } from 'redux-immutable';
//导入项目中头部区域子仓库
import HeaderReducer from "../common/Header/store/reducer";
//导入项目中尾部区域子仓库
// import FooterReducer from "../common/Footer/store/reducer";
//导入home子仓库到总仓库
// import HomeReducer from '../pages/Home/store/reducer';
//导入about子仓库到总仓库
// import AboutReducer from '../pages/About/store/reducer';
//导入business子仓库到总仓库
// import BusinessReducer from '../pages/Business/store/reducer';
//导入contact子仓库到总仓库
// import ContactReducer from '../pages/Contact/store/reducer';
//导入news子仓库到总仓库
// import NewsReducer from '../pages/News/store/reducer';
//导入operation子仓库到总仓库
// import OperationReducer from '../pages/Operation/store/reducer';
//导入staff子仓库到总仓库
// import StaffReducer from '../pages/Staff/store/reducer';
//整合子仓库到总仓库进行管理
export default combineReducers({
    header:HeaderReducer,
    // home:HomeReducer,
    // footer:FooterReducer,
    // about:AboutReducer,
    // business:BusinessReducer,
    // contact:ContactReducer,
    // news:NewsReducer,
    // operation:OperationReducer,
    // staff:StaffReducer
})