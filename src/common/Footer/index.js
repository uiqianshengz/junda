import React, { Component } from "react";
import { FooterCon, FooterLeft, FooterRight } from './style'
class Footer extends Component {
    render() {
        return (
            <FooterCon>
                <FooterLeft>
                    <p>服务热线<span className="fuwu">400-0755-167</span></p>
                    <p>深圳市君达房地产经纪有限公司版权所有</p>
                    <p>Copyright2018 粤ICP备15008189号-1</p>
                    <p>技术支持</p>
                    <img src="http://szjddc.com/dist/images/code.png" alt="" />
                    <div className="guanzhu">
                        <p>关注我们 Concern Us</p>
                        <p>添加君达微信公众号了解更多企业资讯</p>
                    </div>
                </FooterLeft>
                <FooterRight>
                        <dl>
                            <dt>关于君达</dt>
                            <dd>公司简介</dd>
                            <dd>企业文化</dd>
                            <dd>企业伙伴</dd>
                            <dd>企业伙伴</dd>
                            <dd>企业理念</dd>
                        </dl>
                        <dl>
                            <dt>君达业务</dt>
                            <dd>君达地产</dd>
                            <dd>君达传媒</dd>
                            <dd>君达投资</dd>
                        </dl>
                        <dl>
                            <dt>运营案例</dt>
                            <dd>商业项目</dd>
                            <dd>住宅项目</dd>
                            <dd>物业整合</dd>
                        </dl>
                        <dl>
                            <dt>新闻中心</dt>
                            <dd>君达新闻</dd>
                            <dd>君达风采</dd>
                        </dl>
                        <dl>
                            <dt>人力资源</dt>
                            <dd>人才理念</dd>
                            <dd>招聘信息</dd>
                        </dl>
                </FooterRight>
            </FooterCon>
        )
    }
}
export default Footer