import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import { NewsContent, NewsWrapper } from '../style'
import { Link } from 'react-router-dom';
class NewsCenter extends Component {
    render() {
        return (
            <NewsContent>
                <NewsWrapper>
                    <h3 className='m-titen'>News Center</h3>
                    <h4 className='m-titcn'>新闻中心</h4>
                    <Row className='newsRow' gutter={44}>
                        {
                            this.props.newsList.map((item, index) => {
                                return (
                                    <Col key={index} className="gutter-row newsCard" sm={{ span: 24 }} lg={{ span: 8 }}>
                                        <div className="rowContent">
                                            <span>
                                                <em>{item.get('date')}</em>
                                                <i>{item.get('month')}</i>
                                            </span>
                                            <div className="imgCard">
                                                <img src={item.get('imgUrl')} alt="" />
                                            </div>
                                            <h4>{item.get('txt')}</h4>
                                        </div>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div className='newsMore'>
                    <Link to='/news'>
                        <div className="newsMoreButton">
                            <div className="moreColor"></div>
                            <div className='moreTxt'>更多新闻</div>
                        </div>
                    </Link>
                    </div>
                </NewsWrapper>
            </NewsContent>
        )
    }
}

const mapState = (state) => ({
    newsList: state.getIn(['home', 'newsList'])
})
const mapDispatch = (dispatch) => ({


})
export default connect(mapState, mapDispatch)(NewsCenter);

