import React, { Component } from 'react';
import { HeaderWrapper, HeaderLeft, HeaderRight, Header } from './style';
import { NavLink } from 'react-router-dom';
class Headers extends Component {
    render() {
        return (
            <Header>
                <HeaderWrapper>
                    <HeaderLeft>
                        <img src="http://szjddc.com/dist/images/logo.png" alt="" />
                    </HeaderLeft>
                    <HeaderRight>
                        <NavLink to='/'>首页
                        <p></p>
                        </NavLink>
                        <NavLink to='/about'>关于君达
                        <p></p>
                        </NavLink>
                        <NavLink to='/business'>君达业务
                        <p></p>
                        </NavLink>
                        <NavLink to='/project'>运营案例
                        <p></p>
                        </NavLink>
                        <NavLink to='/news'>新闻中心
                        <p></p>
                        </NavLink>
                        <NavLink to='/staff'>人力资源
                        <p></p>
                        </NavLink>
                        <NavLink to='/contact'>联系我们
                        <p></p>
                        </NavLink>
                    </HeaderRight>
                </HeaderWrapper>
            </Header>

        )
    }
}

export default Headers


