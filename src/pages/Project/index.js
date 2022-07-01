import React, { Component } from 'react';
// import { Breadcrumb } from 'antd';
import { Project, ProjectWrapper, ProjectLeft, ProjectTit, ProjectRight,ProjectNav } from './style'
import { NavLink, Outlet } from 'react-router-dom';
class Home extends Component { 
    render() {
        return (
            <Project>
                <ProjectNav>
                    <img src="http://szjddc.com/Uploads/20181010040912_758910.jpg" alt="" />
                    <ProjectWrapper>
                        <ProjectLeft>
                            <NavLink to='/project/busines'>
                                <ProjectTit>商务项目</ProjectTit>
                                <p></p>
                            </NavLink>
                            <NavLink to='/project/house'>
                                <ProjectTit>住宅项目</ProjectTit>
                                <p></p>
                            </NavLink>
                            <NavLink to='/project/property'>
                                <ProjectTit>物业整合投资</ProjectTit>
                                <p className='p'></p>
                            </NavLink>
                        </ProjectLeft>
                        <ProjectRight>
                            {/* <Breadcrumb separator=">">
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item href="">君达业务</Breadcrumb.Item>
                                <Breadcrumb.Item href="">君达地产</Breadcrumb.Item>
                            </Breadcrumb> */}
                        </ProjectRight>
                     
                    </ProjectWrapper>
                    
                </ProjectNav>
                <Outlet></Outlet>
            </Project>
        )
    }
}

export default Home