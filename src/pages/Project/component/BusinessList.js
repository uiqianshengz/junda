import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { actionCreators } from '../store';
import {
    BusinessCon, BusinessWrapper, BusinessTit1, BusinessTit2, BusinessBlock, BusinessText, BusinessImg, BusTitle,
    BusText, BusTips, BusCon
} from '../style'
class Business extends Component {
    render() {
        return (
            <BusinessCon>
                <BusinessWrapper>
                    <BusinessTit1>{this.props.Commercial.get('title1')}</BusinessTit1>
                    <BusinessTit2>{this.props.Commercial.get('title2')}</BusinessTit2>
                    <p></p>
                </BusinessWrapper>
                <BusinessWrapper>
                    <BusCon>
                        {
                            this.props.Commercont.map((item, index) => {
                                return (
                                    <NavLink to={'details?id='+item.get('id')} key={index}>
                                        <BusinessBlock>
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
        //    console.log(123);
        this.props.Projects();

    }
}
const mapState = (state) => ({
    Commercial: state.getIn(['project', 'Commercial']),
    Commercont: state.getIn(['project', 'Commercont']),

})
const mapDispatch = (dispatch) => ({
    Projects() {
        dispatch(actionCreators.getProjectList())
    }
})
export default connect(mapState, mapDispatch)(Business);
