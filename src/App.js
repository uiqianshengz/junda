import React, { Component, Fragment } from 'react'
//导入头部
import Header from './common/Header';
// 导入底部
import Footer from './common/Footer';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
// import Estate from './pages/Business/components/EstateList';
import Media from './pages/Business/components/Media';
import Invest from './pages/Business/components/Invest';
import Message from './pages/Staff/component/Message'
import People from './pages/Staff/component/People'
import EstateList from './pages/Business/components/EstateList';
import BusinessList from './pages/Project/component/BusinessList';
import House from './pages/Project/component/House';
import Property from './pages/Project/component/Property'
import BusDetails from './pages/Project/component/BusDetails';
class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Header></Header>
                    <Routes>
                        <Route path='/' element={<Home></Home>}>home页面</Route>
                        <Route path='/about' element={<About></About>}>about页面</Route>
                        <Route path='/contact' element={<Contact></Contact>}>contact页面</Route>
                        <Route path='/business' element={<Business></Business>}>Business页面
                            <Route path='' element={<Navigate to="estate" />}>Estate页面</Route>
                            <Route path='estate' element={<EstateList></EstateList>}>Estate页面</Route>
                            <Route path='media' element={<Media></Media>}>media页面</Route>
                            <Route path='invest' element={<Invest></Invest>}>invest页面</Route>
                        </Route>
                        <Route path='/news' element={<News></News>}>news页面
                            <Route path='' element={<Navigate to="press" />}></Route>
                            <Route path='/news/press' element={<Press></Press>}></Route>
                            <Route path='/news/shine' element={<Shine></Shine>}></Route>
                        </Route>
                        <Route path='/project' element={<Project></Project>}>project页面
                            <Route path='' element={<Navigate to="busines" />}>Business页面</Route>
                            <Route path='busines' element={<BusinessList></BusinessList>}>Business页面</Route>
                            <Route path='busines/:id' element={<BusDetails></BusDetails>}>Busdetails页面</Route>
                            <Route path='house' element={<House></House>}>House页面</Route>
                            <Route path='Property' element={<Property></Property>}>Property页面</Route>
                        </Route>
                        
                        <Route path='/staff' element={<Staff></Staff>}>staff页面
                            <Route path='' element={<Navigate to="people" />}></Route>
                            <Route path='/staff/people' element={<People></People>}></Route>
                            <Route path='/staff/message' element={<Message></Message>}></Route>
                        </Route>
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default App;
