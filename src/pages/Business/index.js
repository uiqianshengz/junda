import React, { Component } from 'react';
// import { Breadcrumb } from 'antd';
import { Business, BusinessWrapper, BusinessLeft, BusinessTit, BusinessRight,BusinessNav } from './style'
import { NavLink, Outlet } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <Business>
                <BusinessNav>
                    <img src="http://szjddc.com/dist/images/tz-banner.jpg" alt="" />
                    <BusinessWrapper>
                        <BusinessLeft>
                            <NavLink to='/business/estate'>
                                <BusinessTit>君达地产</BusinessTit>
                                <p></p>
                            </NavLink>
                            <NavLink to='/business/media'>
                                <BusinessTit>君达传媒</BusinessTit>
                                <p></p>
                            </NavLink>
                            <NavLink to='/business/invest'>
                                <BusinessTit>君达投资</BusinessTit>
                                <p></p>
                            </NavLink>
                        </BusinessLeft>
                        <BusinessRight>
                            {/* <Breadcrumb separator=">">
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item href="">君达业务</Breadcrumb.Item>
                                <Breadcrumb.Item href="">君达地产</Breadcrumb.Item>
                            </Breadcrumb> */}
                        </BusinessRight>
                    </BusinessWrapper>               
                </BusinessNav>
                <Outlet></Outlet>
            </Business>
        )
    }
}

export default Home