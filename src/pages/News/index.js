import React, { Component } from "react"
import { NewsWrapper, NewsCarou, NewsLin, Newswr } from './style'
import { Link, Outlet } from 'react-router-dom'
class News extends Component {
    render() {
        return (
            <NewsWrapper>
                <NewsCarou>
                    <img src="http://szjddc.com/Uploads/20181025061439_945358.jpg" alt="" />
                </NewsCarou>
                <NewsLin>
                    <Newswr>
                        <Link to="./press" className="linkname">君达新闻</Link>
                        <Link to="./shine" className="linkname">君达风采</Link>
                    </Newswr>                 
                </NewsLin>
                <Outlet></Outlet>
            </NewsWrapper>
        )
    }
    componentDidMount(){
        // 返回顶部
        window.scrollTo(0, 0);
    }
}

export default News