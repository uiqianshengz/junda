import React, { Component } from "react"
import {StaffWpp,StaffCpp} from '../style'
class People extends Component {
    render() {
        return (
            <StaffWpp>
                <p className="tal">Talent Concept</p>
                <h4>人才理念</h4>
                <p className="line"></p>
               <p className="stp">有道无术，术尚可求；有术无道，止于术。</p>
                <p className="stapes">团队的智慧和创造力是企业最大的财富，是企业发展之根本。我们把员工当做是企业发展道路上的合作伙伴，</p>
                <p className="stape">并为其提供自由发展的空间与舞台，希望君达的伙伴们都能在工作中享受学习与生活的愉悦，在愉悦中努力的工作与收获。</p>
               <StaffCpp>
                <img className="img1" src="http://szjddc.com/Uploads/ueditor/image/20181025/6367608743949221291509893.jpg" alt="" />
                <div>
                    <p className="staffdiv">在君达只要有能力就有空间，就有舞台</p>
                    <p className="staffdiv"> 我们致力于培养打造以下三类人才为目标</p>
                    <img className="img2" src="http://szjddc.com/dist/images/wicon33.png" alt="" />
                    <p className="staffppp">专业型人才 复合型人才 创造型人才</p>
                </div>
               </StaffCpp>
            </StaffWpp>
        )
    }
}
export default People