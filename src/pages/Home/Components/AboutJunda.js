import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AboutWrapper,Li, AboutImg, AboutNum, AboutTxt, Span, Ul } from '../style'
class AboutJunda extends Component {
    render() {
        return (
            <AboutWrapper>
                <h3 className='m-titen'>About Junda</h3>
                <h4 className='m-titcn'>关于君达</h4>
                <div className='indexjunda-con'>
                    <h5>中国房地产智慧供应商</h5>
                    <p>深圳市君达房地产经纪有限公司前身是深圳风云地产顾问公司（成立于2004年），2011年深圳风云地产成功改制为深圳君达地产，</p>
                    <p>是一家专业从事房地产领域的地产营销代理公司，公司致力于服务房地产领域商业地产、住宅地产两大核心地产形态业务。</p>
                    <p>为开发商提供前期策划代理、营销策划顾问、销售代理、招商代理、运营管理顾问等专业代理服务。公司在经过多年的行业积累，于2011年成功进军物业整合收购投资领域。</p>
                </div>
                <Ul>
                    {
                        this.props.aboutList.map((item, index) => {
                            return (
                                <Li key={index}>
                                    <AboutImg>
                                        <img src={item.get('imgUrl')} alt="" />
                                    </AboutImg>
                                    <AboutNum>
                                        <Span>{item.get('number')}</Span><i>+</i>
                                    </AboutNum>
                                    <AboutTxt>{item.get('txt')}</AboutTxt>
                                </Li>
                            )
                        })
                    }
                </Ul>
            </AboutWrapper>
        );
    }
}
const mapState = (state) => ({
    aboutList: state.getIn(['home', 'aboutList'])
})
const mapDispatch = (dispatch) => ({


})
export default connect(mapState, mapDispatch)(AboutJunda);
