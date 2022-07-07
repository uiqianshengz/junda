import React, { Component } from "react"
import { ShineWrapper, ShineJun, Shinesmail } from '../style'
import { connect } from 'react-redux';
import { Image } from 'antd';
import { actionCreators } from '../store'
class Shine extends Component {
    render() {
        return (
            <ShineWrapper>
                <p>Junda style</p>
                <h4>君达风采</h4>
                <Shinesmail>
                <Image.PreviewGroup>
                    {
                        this.props.ShineData.map((item, index) => {
                            return (
                                <ShineJun className="ShineJun" key={index}>
                                    <Image width={285} height={160} className="mage" src={item.get('imgUrl')} />
                                    <div>{item.get('title')}</div>
                                </ShineJun>
                            )
                        })
                    }
                    </Image.PreviewGroup>
                </Shinesmail>
            </ShineWrapper>
        )
    }
    componentDidMount() {
        this.props.NewsPress()
        // 返回顶部
        window.scrollTo(0, 0);
    }
}
const mapState = (state) => ({
    ShineData: state.getIn(['news', 'ShineData'])
})
const mapDispatch = (dispatch) => ({
    NewsPress() {
        dispatch(actionCreators.NewsDataPress())
    }
})
export default connect(mapState, mapDispatch)(Shine)