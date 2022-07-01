import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../store';
import { BusinessCon, BusinessWrapper, BusinessTit1, BusinessTit2, BusinessBlock,BusinessText,BusinessImg,BusTitle,
    BusText,BusTips,BusCon} from '../style'
class House extends Component {
    render() {
        return (
            <BusinessCon>
                <BusinessWrapper>
                    <BusinessTit1>{this.props.Residential.get('title1')}</BusinessTit1>
                    <BusinessTit2>{this.props.Residential.get('title2')}</BusinessTit2>
                    <p></p>
                </BusinessWrapper>
                <BusinessWrapper>
                    <BusCon>
                         {
                        this.props.Residecont.map((item, index) => {
                            return(
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
    Residential: state.getIn(['project', 'Residential']),
    Residecont: state.getIn(['project', 'Residecont'])
})
const mapDispatch = (dispatch) => ({
    Projects() {
        dispatch(actionCreators.getProjectList())
    }
})
export default connect(mapState, mapDispatch)(House);
