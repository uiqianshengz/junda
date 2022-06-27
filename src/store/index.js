//导入store,中间件applyMiddleware,浏览器检查插件compose
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
//让actionCreators的返回值可以是一个函数
// 引入模块化文件
import reducer from './reducer';
import thunk from 'redux-thunk';
// 这里是使用浏览器插件的配置
const composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeFn(applyMiddleware(thunk))
//让数据和方法被store管理
// 创建并曝出仓库
const store = createStore(reducer, enhancer);
export default store;