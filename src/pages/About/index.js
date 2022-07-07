import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Components/Profile';
import Culture from './Components/Culture';
import Partner from './Components/Partner';
import Development from './Components/Development';
import { actionCreators } from './store';
import {Img} from './style'
class About extends Component { 
    render() {
        return (
            <div>
                <Img>
                    <img src="http://szjddc.com/dist/images/aboutimg01.jpg" alt="" />
                </Img>
                <Profile></Profile>
                <Culture></Culture>
                <Partner></Partner>
                <Development></Development>
            </div>
        )
    }
    componentDidMount(){
        this.props.aboutList() 
        // 返回顶部
    window.scrollTo(0, 0);
    }
}
const mapState = (state) => ({

})
const mapDispatch = (dispatch) => ({
    aboutList() {
        //执行actioncreators里的getAboutList函数，拿到ajax请求结果，保存在aboutList中
        dispatch(actionCreators.getAboutList())
    },
})
export default connect(mapState, mapDispatch)(About)