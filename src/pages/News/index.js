import React, { Component } from "react"
import { NewsWrapper, NewsCarou, NewsLin, Newswr } from './style'
import { NavLink, Outlet } from 'react-router-dom'
class News extends Component {
    render() {
        return (
            <NewsWrapper>
                <NewsCarou>
                    <img src="http://szjddc.com/Uploads/20181025061439_945358.jpg" alt="" />
                </NewsCarou>
                <NewsLin>
                    <Newswr>
                        <NavLink to="./press" className="linkname">君达新闻</NavLink>
                        <NavLink to="./shine" className="linkname">君达风采</NavLink>
                    </Newswr>                 
                </NewsLin>
                <Outlet></Outlet>
            </NewsWrapper>
        )
    }
}

export default News