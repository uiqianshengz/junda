import 'antd/dist/antd.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
//Provider 提供器，被Provider包裹的组件，有能力自动连接store
const Demo = (
    <Provider store={store}>
        <App></App>
    </Provider>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    Demo
);