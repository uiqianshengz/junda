import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PartnerWrapper, CommonWeb } from '../style'
import { Col, Row } from 'antd';
class Partner extends Component {
    render() {
        return (
            <div>
                <PartnerWrapper>
                    <CommonWeb>
                        <h3>Company Profile</h3>
                        <h4>
                            <span>企业伙伴</span>
                        </h4>
                    </CommonWeb>
                    <Row className="row" gutter={[16, 16]}>
                        {
                            this.props.partnerList.map((item, index) => {
                                return (
                                    <Col key={index} className="gutter-row col" span={4}>
                                        <div>
                                            <img src={item.get('imgUrl')} alt="" />
                                        </div>
                                        
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </PartnerWrapper>
            </div>
        );
    }
}
const mapState = (state) => ({
    partnerList: state.getIn(['about', 'partnerList'])
})
const mapDispatch = (dispatch) => ({


})
export default connect(mapState, mapDispatch)(Partner);