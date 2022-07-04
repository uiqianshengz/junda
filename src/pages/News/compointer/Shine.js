import React, { Component } from "react"
import { ShineWrapper, ShineJun,Shinesmail } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
class Shine extends Component {
    render() {
        return (
            <ShineWrapper>
                <p>Junda style</p>
                <h4>君达风采</h4>
                <Shinesmail>
                    {
                        this.props.ShineData.map((item, index) => {
                            return (
                                <ShineJun className="ShineJun" key={index}>
                                    <img src={item.get('imgUrl')} alt="" />
                                    <div>{item.get('title')}</div>
                                </ShineJun>
                            )
                        })
                    }
                </Shinesmail>
            </ShineWrapper>
        )
    }
    componentDidMount() {
        this.props.NewsPress()
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