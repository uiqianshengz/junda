import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { ProjectContent } from '../style'
class JundaProject extends Component {
    render() {
        return (
            <ProjectContent>
                    <h3 className='m-titen'>Junda Project</h3>
                    <h4 className='m-titcn'>君达案例</h4>
                    <Swiper
                        slidesPerView={4}
                        centeredSlides={false}
                        speed={1000} // 是速度
                        loop={true} // 无限循环
                        className="mySwiper"
                        autoplay={{
                            autoplay: true,
                            delay: 100,
                            disableOnInteraction: true, // 不设置只会轮播一次
                            pauseOnMouseEnter: true, // 鼠标移入暂停
                        }}
                        grabCursor={true} //拖动鼠标抓手状态
                    >
                        {
                            this.props.projectList.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="swiperItem">
                                        <div>
                                            <img src={item.get('imgUrl')} alt="" />
                                        </div>

                                        <h4>{item.get('txt')}</h4>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <div className='projectMore'>
                        <Link to='/project'>
                        <div className="MoreButton">
                            <div className="moreColor"></div>
                            <div className='moreTxt'>更多新闻</div>
                        </div>
                        </Link>

                    </div>
            </ProjectContent>
        )
    }
}

const mapState = (state) => ({
    projectList: state.getIn(['home', 'projectList'])
})
const mapDispatch = (dispatch) => ({


})
export default connect(mapState, mapDispatch)(JundaProject);

