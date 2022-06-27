import React, { Component, Fragment } from 'react'
//导入头部
import Header from './common/Header';
// 导入底部
import Footer from './common/Footer';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//导入不同的组件
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Contact from './pages/Contact';
import News from './pages/News';
import Operation from './pages/Operation';
import Staff from './pages/Staff';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home></Home>}>home页面</Route>
                        <Route path='/about' element={<About></About>}>about页面</Route>
                        <Route path='/contact' element={<Contact></Contact>}>contact页面</Route>
                        <Route path='/business' element={<Business></Business>}>Business页面</Route>
                        <Route path='/news' element={<News></News>}>news页面</Route>
                        <Route path='/operation' element={<Operation></Operation>}>operation页面</Route>
                        <Route path='/staff' element={<Staff></Staff>}>staff页面</Route>
                    </Routes>
                </BrowserRouter>
                <Footer></Footer>
            </Fragment>

        )
    }
}

export default App;
