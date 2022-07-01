import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ProfileContent,CommonWeb,Txt}  from '../style';
class Profile extends Component {
    render() {
        return (
            <ProfileContent>
                <CommonWeb>
                    <h3>Company Profile</h3>
                    <h4>
                        <span>公司简介</span>
                    </h4>
                </CommonWeb>
                <Txt>
                    <div className='left'>
                        <h4>中国房地产智慧供应商</h4>
                        <p>深圳市君达房地产经纪有限公司前身是深圳风云地产顾问公司（成立于2004年），2011年深圳风云地产成功改制为深圳君达地产，是一家专业从事房地产领域的地产营销代理公司，公司致力于服务房地产领域商业地产、住宅地产两大核心地产形态业务。为开发商提供前期策划代理、营销策划顾问、销售代理、招商代理、运营管理顾问等专业代理服务。公司在经过多年的行业积累，于2011年成功进军物业整合收购投资领域。</p>
                        <p>&nbsp;</p>
                        <p>君达地产拥有数位老中青结合的核心商业地产操盘骨干和专家顾问、同时具有丰富的商家资源链和同行战略联盟合作伙伴，业务骨干均为地产营销行业具有多年商业实战经验的优秀职业经理人，公司专注团队建设、人才与资源平台的整合，立志打造中国商业地产营销代理执行第一品牌，缔造中国商业地产服务行业的标准与规范。</p>
                        <p>&nbsp;</p>
                        <p>公司秉持“务实、专业、创新、共荣”的服务理念，凭借对消费者需求的准确把握、对市场形式的科学判断、对各类产品的精准定位，服务于城市综合体、Shopping Mall、商业街、专业市场、写字楼、住宅、文化产业园等各种业态。源于对市场的敏锐触觉和功力深厚的策划及专业的操盘经验，开创性的提出了独具特色的招商、销售理念。主动造市、引领市场，君达地产大手笔实施“制造焦点、引导舆论、营造氛围、引爆市场”的分层造市策划手段，成功代理诸多项目，并以一系列的经典案例而倍受市场瞩目，成为活跃在中国地产代理行业中的一支劲旅。公司以务实、创新的精神，高效的执行力，灵活的团队作战模式面向全国发展。</p>
                    </div>
                    <div className="right">
                        <img src="http://szjddc.com/dist/images/aboutimg02.jpg" alt="" />
                    </div>
                </Txt>
            </ProfileContent>
        );
    }
}
const mapState = (state) => ({
    aboutList: state.getIn(['home', 'aboutList'])
})
const mapDispatch = (dispatch) => ({


})
export default connect(mapState, mapDispatch)(Profile);