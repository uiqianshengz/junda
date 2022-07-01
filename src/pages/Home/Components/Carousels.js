import React, { Component } from 'react';
import { Carousel } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from "../store";
import { LeftButton, RightButton, CarouselItem } from '../style'
class Carousels extends Component {
    prevImg=()=> {
        this.slider.prev();
    }
    nextImg=()=> {
        this.slider.next();
    }
    render() {
        return (
            <div onMouseEnter={this.props.buttonShow} onMouseLeave={this.props.buttonHide}>
                <Carousel autoplay dots ref={el => (this.slider = el)}>
                    <CarouselItem>
                        <img src="https://s2.loli.net/2022/06/29/3VtXfNyHkMYdvbo.jpg" className='CarouselImg' alt="" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="https://s2.loli.net/2022/06/29/imFIDjNOMlvo21J.jpg" className='CarouselImg' alt="" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src="https://s2.loli.net/2022/06/29/q5rcQHhCNMwRbg9.jpg" className='CarouselImg' alt="" />
                    </CarouselItem>
                </Carousel>
                {
                    this.props.buttonShows?(<div>
                        <LeftButton onClick={this.prevImg}  >
                        <i className='icon1' />
                    </LeftButton>
                    <RightButton onClick={this.nextImg}>
                        <i className='icon2' />
                    </RightButton>
                    </div>):null
                }
            </div>
        )
    }
}
const mapState = (state) => ({
    buttonShows: state.getIn(['home', 'buttonShow'])
})
const mapDispatch = (dispatch) => ({
    // 鼠标滑过切换轮播图按钮出现
    buttonShow() {
        dispatch(actionCreators.getButtonShow())
    },
    buttonHide() {
        dispatch(actionCreators.getButtonHide())
    }
})
export default connect(mapState, mapDispatch)(Carousels);
