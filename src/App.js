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
import Press from './pages/News/compointer/Press';
import Shine from './pages/News/compointer/Shine';
import Project from './pages/Project';
import Staff from './pages/Staff';
import Message from './pages/Staff/component/Message'
import People from './pages/Staff/component/People'
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
                        <Route path='/news' element={<News></News>}>news页面
                            <Route path='' element={<Press></Press>}></Route>
                            <Route path='/news/press' element={<Press></Press>}></Route>
                            <Route path='/news/shine' element={<Shine></Shine>}></Route>
                        </Route>
                        <Route path='/project' element={<Project></Project>}>project页面</Route>
                        <Route path='/staff' element={<Staff></Staff>}>staff页面
                            <Route path='' element={<People></People>}></Route>
                            <Route path='/staff/people' element={<People></People>}></Route>
                            <Route path='/staff/message' element={<Message></Message>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
                <Footer></Footer>
            </Fragment>
        )
    }
}

export default App;
