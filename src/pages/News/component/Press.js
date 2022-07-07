import React, { Component } from "react";
import { PressWrapper, PressCarou, PressLeft, PressRight, PressNex, PressImg, PressTit, PressDa } from '../style';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actionCreators } from '../store';
class Press extends Component {
    render() {
        return (
            <PressWrapper>
                <NavLink to="details?id=1">
                <PressCarou>
                    <PressLeft>
                        <img src="http://szjddc.com/Uploads/20181018124359_623028.jpg" alt="" />
                    </PressLeft>
                    <PressRight>
                        <h3>2018.03.15</h3>
                        <h4>誉冠中国 耀启九江 天禧全国分销商战略仪式暨营销启动大会圆满成功</h4>
                        <p>3月15日，“誉冠中国·耀启九江”——天禧全国分销商战略仪式暨营销启动大会在远洲国际大酒店盛大举行。来自北京、杭州、南京、南昌、景德镇等全国各地的300余名房地产骨干精英齐聚一堂，与天禧营销团队共同拉开2018业绩冲刺战的帷幕，为冲冠九江奋战！</p>
                    </PressRight>
                </PressCarou>
                </NavLink>
                {
                    this.props.Newsbox.map((item, index) => {
                        return (
                            <NavLink to={'details?id=' + item.get('id')} key={index}>
                                <PressNex className="next">
                                    <PressImg>
                                        <img src={item.get('imgUrl')} alt="" />
                                    </PressImg>
                                    <PressTit>
                                        <PressDa>
                                            <h4>{item.get('title2')}</h4>
                                            <h3>{item.get('title1')}</h3>
                                        </PressDa>
                                        <p>{item.get('title3')}</p>
                                    </PressTit>
                                </PressNex>
                            </NavLink>
                        )
                    })
                }
            </PressWrapper>
        )
    }
    componentDidMount() {
        this.props.NewsPress()
        // 返回顶部
        window.scrollTo(0, 0);
    }
}
const mapState = (state) => ({
    Newsbox: state.getIn(['news', 'Newsbox'])
})
const mapDispatch = (dispatch) => ({
    NewsPress() {
        dispatch(actionCreators.NewsDataPress())
    }
})
export default connect(mapState, mapDispatch)(Press)