import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonWeb, CultureWrapper, CultureContent } from '../style'
class Culture extends Component {
    render() {
        return (
            <CultureContent>
                <CultureWrapper>
                    <CommonWeb>
                        <h3>Company Profile</h3>
                        <h4>
                            <span>企业文化</span>
                        </h4>
                    </CommonWeb>
                    <div className="culture-img">
                        <img src="http://szjddc.com/Uploads/20181102101414_871072.png" alt="" />
                    </div>
                    <div className="culture-content">
                        <p>企业文化是凝聚力的源泉，更是成就经典案例的内在支撑。</p>
                        <p>正是这种文化把全体在外作业员工的人生追求与公司目标紧密相结合。</p>
                        <p>从而形成君达人应有与独有的信仰，实现了全体同仁的系统思想传递,</p>
                        <p>成为公司在市场经济大海中航行的导向和牵引。</p>
                        <div className="form-group clearfix">
                            <p>以专业的知识立足市场</p>
                            <p>以务实的态度打造市场</p>
                            <p>以独特的见解分享市场</p>
                            <p>以不断的创新赢取市场</p>
                        </div>
                    </div>
                    <div className="culture-list clearfix">
                        <ul>
                            {
                                this.props.CultureList.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="culture-list">
                                                <div className="incon">
                                                    <img className='beforeimg' src={item.get('imgUrl1')} alt="" />
                                                    <img className='afterimg' src={item.get('imgUrl2')} alt="" />
                                                </div>
                                                <h4>{item.get('title')}</h4>
                                                <p>{item.get('txt')}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </CultureWrapper>
            </CultureContent>
        );
    }
}
const mapState = (state) => ({
    CultureList: state.getIn(['about', 'CultureList'])
})
const mapDispatch = (dispatch) => ({


})
export default connect(mapState, mapDispatch)(Culture);
