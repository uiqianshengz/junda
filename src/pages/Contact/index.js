import React, { Component } from "react"
import { ConWrapper,ConCarou,ContactW,ConContent,Context,ConImg } from './style'
class Contact extends Component {
    render() {
        return (
            <ConWrapper>
                <ConCarou>
                    <img src="http://szjddc.com/dist/images/contact01.jpg" alt="" />
                </ConCarou>
                <ContactW>
                <p className="talll">Contact us</p>
                <h4>联系我们</h4>
                <ConContent>
                    <Context>
                        <div>深圳市君达房地产经纪有限公司</div>
                        <p>电话：<span>400-0755-167</span> </p>
                        <p>邮箱：szjddcgs@126.com</p>
                        <p>网址：www.szjddc.com</p>
                        <p>深圳总部地址：深圳市龙岗区南联路24号仁和兴业大厦9楼</p>
                        <p>武汉分公司地址：武汉市江汉区沿江大道83号世纪中心大厦1308</p>
                    </Context>
                    <ConImg>
                        <p>Company philosophy</p>
                        <p>务实      专业      创新      共荣</p>
                        <img src="http://szjddc.com/dist/images/contact02.jpg" alt="" />
                    </ConImg>
                </ConContent>
                </ContactW>
            </ConWrapper>
        )
    }
}

export default Contact