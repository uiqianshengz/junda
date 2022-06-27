import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
// 引入模块化文件
import reducer from './reducer';
//从redux-thunk第三方包中导入thunk中间件让action可以是一个函数(让actioncreators可以发送ajax请求)
import thunk from 'redux-thunk';
// 这里是使用浏览器插件的配置
const composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeFn(applyMiddleware(thunk))
// 创建并导出仓库
const store = createStore(reducer, enhancer);
export default store;
