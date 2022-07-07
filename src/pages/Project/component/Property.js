import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../store';
import { NavLink } from 'react-router-dom';
import {
    BusinessCon, BusinessWrapper, BusinessTit1, BusinessTit2, BusinessBlock, BusinessText, BusinessImg, BusTitle,
    BusText, BusTips, BusCon
} from '../style'
class Property extends Component {
    render() {
        return (
            <BusinessCon>
                <BusinessWrapper>
                    <BusinessTit1>{this.props.Property.get('title1')}</BusinessTit1>
                    <BusinessTit2>{this.props.Property.get('title2')}</BusinessTit2>
                    <p></p>
                </BusinessWrapper>
                <BusinessWrapper>
                    <BusCon>
                        {
                            this.props.Propercont.map((item, index) => {
                                return (
                                    <NavLink to={'details?id=' + item.get('id')} key={index}>
                                        <BusinessBlock key={index}>
                                            <BusinessImg>
                                                <img src={item.get('img')} alt="" />
                                            </BusinessImg>
                                            <BusinessText>
                                                <BusTitle>{item.get('title')}</BusTitle>
                                                <BusText>{item.get('text')}</BusText>
                                                <BusTips><span>{item.get('tips')}</span></BusTips>
                                            </BusinessText>
                                        </BusinessBlock>
                                    </NavLink>
                                )
                            })
                        }
                    </BusCon>
                </BusinessWrapper>
            </BusinessCon>
        );
    }
    componentDidMount() {
        this.props.Projects();
        // 返回顶部
    window.scrollTo(0, 0);
    }
}
const mapState = (state) => ({
    Property: state.getIn(['project', 'Property']),
    Propercont: state.getIn(['project', 'Propercont'])
})
const mapDispatch = (dispatch) => ({
    Projects() {
        dispatch(actionCreators.getProjectList())
    }
})
export default connect(mapState, mapDispatch)(Property);
