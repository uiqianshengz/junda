import React, { Component } from "react"
import { StaffWrapper, StaffCarou, StafLin, Staffwr } from './style'
import { Link, Outlet } from 'react-router-dom'
class Staff extends Component {
    render() {
        return (
            <StaffWrapper>
                <StaffCarou>
                    <img src="http://szjddc.com/dist/images/zp-banner.jpg" alt="" />
                </StaffCarou>
                <StafLin>
                    <Staffwr>
                        <Link to="./people" className="linknames">人才理念</Link>
                        <Link to="./message" className="linknames">招聘信息</Link>
                    </Staffwr>  
                </StafLin>
                <Outlet></Outlet>
            </StaffWrapper>
        )
    }
}

export default Staff