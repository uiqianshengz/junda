import React, { Component } from "react"
import { StaffWrapper, StaffCarou, StafLin, Staffwr } from './style'
import { NavLink, Outlet } from 'react-router-dom'
class Staff extends Component {
    render() {
        return (
            <StaffWrapper>
                <StaffCarou>
                    <img src="http://szjddc.com/dist/images/zp-banner.jpg" alt="" />
                </StaffCarou>
                <StafLin>
                    <Staffwr>
                        <NavLink to="./people" className="linknames">人才理念</NavLink>
                        <NavLink to="./message" className="linknames">招聘信息</NavLink>
                    </Staffwr>  
                </StafLin>
                <Outlet></Outlet>
            </StaffWrapper>
        )
    }
}
export default Staff