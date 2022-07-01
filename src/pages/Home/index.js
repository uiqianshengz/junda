import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutJunda from './Components/AboutJunda';
import JundaBusiness from './Components/JundaBusiness';
import NewsCenter from './Components/NewsCenter';
import JundaProject from './Components/JundaProject';
import Carousels from './Components/Carousels';
import { actionCreators } from './store';
import { HomeDom } from './style'
class Home extends Component {
    render() {
        return (
            <HomeDom>
                <Carousels></Carousels>
                <AboutJunda></AboutJunda>
                <JundaBusiness></JundaBusiness>
                <NewsCenter></NewsCenter>
                <JundaProject></JundaProject>
            </HomeDom>

        )
    }
    componentDidMount() {
        //页面刚加载时调用，显示ajax请求结果
        this.props.homeList()
    }
}

const mapState = (state) => ({

})
const mapDispatch = (dispatch) => ({
    homeList() {
        //执行actioncreators里的getAboutList函数，拿到ajax请求结果，保存在aboutList中
        dispatch(actionCreators.getHomeList())
    },
})
export default connect(mapState, mapDispatch)(Home)