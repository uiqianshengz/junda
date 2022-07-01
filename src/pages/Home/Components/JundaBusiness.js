import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import { BusinessCentent, BusinessWrapper } from '../style'
class JundaBusiness extends Component {
    render() {
        return (
            <BusinessCentent>
                <BusinessWrapper>
                    <h3 className='m-titen'>Junda Business</h3>
                    <h4 className='m-titcn'>君达业务</h4>
                    <Row gutter={20}>
                        {
                            this.props.businessList.map((item, index) => {
                                return (
                                    <Col key={index} className="gutter-row businessCard" sm={{ span: 24 }} lg={{ span: 8 }}>
                                        <div className="imgCard">
                                            <img src={item.get('imgUrl')} alt="" />
                                        </div>
                                        <div className="businessTxt">
                                            <h3>{item.get('title')}</h3>
                                            <h4>{item.get('eTitle')}</h4>
                                            <p>{item.get('txt')}</p>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </BusinessWrapper>
            </BusinessCentent>
        )
    }
}

const mapState = (state) => ({
    businessList: state.getIn(['home', 'businessList'])
})
const mapDispatch = (dispatch) => ({


})
export default connect(mapState, mapDispatch)(JundaBusiness);
