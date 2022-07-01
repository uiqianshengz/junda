import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DevelopmentContent,DevelopmentWrapper} from '../style'
class Development extends Component {
    render() {
        return (
            <div>
                <DevelopmentContent>
                    <DevelopmentWrapper>
                        <ul>
                            <li>
                                <div>
                                    <span>3</span>+
                                    <p>三大业务板块</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>40</span>+
                                    <p>四十多个服务案例</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>100</span>+
                                    <p>一百多位行业精英</p>
                                </div>
                            </li>
                            <li className='redLi'>
                                <div>
                                    <span>1000</span>+
                                    <p>服务面积超过一千万平方米</p>
                                </div>
                            </li>
                        </ul>
                        <div className="container">
                            <div>
                                <p>君达以务实、创新的精神，</p>
                                <p>高效的执行力，灵活的团队作战模式，</p>
                                <p>面向全国发展。</p>
                                <p className='nattitle'>National Development</p>
                            </div>
                                
                        </div>
                    </DevelopmentWrapper>
                            <div className="china">
                                <img src="http://szjddc.com/dist/images/wicon31.png" alt="" />
                            </div>
                </DevelopmentContent>
            </div>
        );
    }
}
const mapState = (state) => ({
    // aboutList: state.getIn(['home', 'aboutList'])
})
const mapDispatch = (dispatch) => ({


})
export default connect(mapState, mapDispatch)(Development);