import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store';
//走马灯效果
import { Carousel } from 'antd';
import {
    EstateWrapper, EstateTit1, EstateTit2, EstateText, EstateCon, EstateBorder, EstateClass,
    EstateTit, EstateLast, EstatePosition, EstateFooter, EstateBlock, EstateBlock1, EstateBlock2, EstateBlock3,
    StandardsTit1, StandardsTit2, StandardsText, EstateImg, BeforeTit, BeforeText, BeforeCon, BeforeTits, BeforeBlock
  ,P,SellTit,SellCon,SellText} from '../style'
class Estate extends Component {
    handleClick = (index,e) => {
        this.slider.goTo(index,false)
        // e.target.style.color = 'red'
    }

    render() {
        const onChange = (currentSlide) => {
            console.log(currentSlide);
        }
        return (
            <EstateCon>
                <EstateWrapper>
                    <EstateTit1>{this.props.Estate.get('title1')}</EstateTit1>
                    <EstateTit2>{this.props.Estate.get('title2')}</EstateTit2>
                    <p></p>
                    <EstateText>{this.props.Estate.get('text1')}</EstateText>
                    <EstateText>{this.props.Estate.get('text2')}</EstateText>
                    <EstateBorder>
                        <Carousel  afterChange={onChange}  ref={el=>(this.slider=el)}>
                            <div>
                            <BeforeTit>
                            前期策划代理服务纲要
                          </BeforeTit>
                          <BeforeCon>
                            {
                                this.props.before.map((item, index) => {
                                    return (
                                        <BeforeBlock key={index}>
                                            <BeforeTits>
                                                    <img src="http://szjddc.com/dist/images/dc-icon01.png" alt="" />
                                                   <P>{item.get('title')}</P>
                                            </BeforeTits>
                                            <BeforeText>{item.get('tips1')} </BeforeText>
                                            <BeforeText>{item.get('tips2')} </BeforeText>
                                            <BeforeText>{item.get('tips3')} </BeforeText>
                                            <BeforeText>{item.get('tips4')} </BeforeText>
                                            <BeforeText>{item.get('tips5')} </BeforeText>
                                            <BeforeText>{item.get('tips6')} </BeforeText>
                                            <BeforeText>{item.get('tips7')} </BeforeText>
                                        </BeforeBlock>
                                    )
                                    
                                })
                            }
                        </BeforeCon>
                            </div>
                            <div>
                            <SellTit>
                            销售代理服务纲要
                          </SellTit>
                          <SellCon>
                            {
                                this.props.sell.map((item, index) => {
                                    return (
                                    <SellText key={index}>{item.get('text')} </SellText>
                                    )
                                    
                                })
                            }
                        </SellCon>
                            </div>
                            <div>
                            <SellTit>
                            招商代理服务纲要
                          </SellTit>
                          <SellCon>
                            {
                                this.props.attract.map((item, index) => {
                                    return (
                                    <SellText key={index}>{item.get('text')} </SellText>
                                    )
                                    
                                })
                            }
                        </SellCon>
                            </div>
                            <div>
                            <SellTit>
                            运营管理顾问服务纲要
                          </SellTit>
                          <SellCon>
                            {
                                this.props.operation.map((item, index) => {
                                    return (
                                    <SellText key={index}>{item.get('text')} </SellText>
                                    )
                                    
                                })
                            }
                        </SellCon>
                            </div>
                        </Carousel>
                    </EstateBorder>
                </EstateWrapper>
                    
                <img src="http://szjddc.com/dist/images/dc-bg.png" alt="" />
                <EstateWrapper>
                    <EstateClass>
                        {
                            this.props.classify.map((item,index)=>{
                                return(
                                 <EstateTit key={index} onClick={(e)=> this.handleClick( index, e )}>{item.get('title')}</EstateTit>                                   
                                )
                               
                            })
                        }
                    </EstateClass>
                </EstateWrapper>
                <EstateLast>
                    <EstatePosition>
                        <EstateWrapper>
                            <EstateTit1>{this.props.ServicePurposes.get('title1')}</EstateTit1>
                            <EstateTit2>{this.props.ServicePurposes.get('title2')}</EstateTit2>
                            <p></p>
                            <EstateText>{this.props.ServicePurposes.get('text1')}</EstateText>
                            <EstateText>{this.props.ServicePurposes.get('text2')}</EstateText>
                            <EstateText>{this.props.ServicePurposes.get('text3')}</EstateText>
                            <EstateText>{this.props.ServicePurposes.get('text4')}</EstateText>
                            <EstateText>{this.props.ServicePurposes.get('text5')}</EstateText>
                        </EstateWrapper>
                    </EstatePosition>
                </EstateLast>
                <EstateWrapper>
                    <EstateFooter>
                        <EstateTit1>{this.props.ServiceStandards.get('title1')}</EstateTit1>
                        <EstateTit2>{this.props.ServiceStandards.get('title2')}</EstateTit2>
                        <p></p>
                        <EstateText>{this.props.ServiceStandards.get('text1')}</EstateText>
                        <EstateText>{this.props.ServiceStandards.get('text2')}</EstateText>
                        <EstateText>{this.props.ServiceStandards.get('text3')}</EstateText>
                    </EstateFooter>
                    <EstateBlock>
                        <EstateBlock1>
                            <EstateImg>
                                <img src={this.props.ServiceStandards.get('img1')} alt="" />
                            </EstateImg>
                            <StandardsTit1>{this.props.ServiceStandards.get('detailTitle1')}</StandardsTit1>
                            <StandardsTit2>{this.props.ServiceStandards.get('detailEng1')}</StandardsTit2>
                            <StandardsText>{this.props.ServiceStandards.get('detailText1')}</StandardsText>
                        </EstateBlock1>
                        <EstateBlock2>
                            <EstateImg>
                                <img src={this.props.ServiceStandards.get('img2')} alt="" />
                            </EstateImg>
                            <StandardsTit1>{this.props.ServiceStandards.get('detailTitle2')}</StandardsTit1>
                            <StandardsTit2>{this.props.ServiceStandards.get('detailEng2')}</StandardsTit2>
                            <StandardsText>{this.props.ServiceStandards.get('detailText2')}</StandardsText>
                        </EstateBlock2>
                        <EstateBlock3>
                            <EstateImg>
                                <img src={this.props.ServiceStandards.get('img3')} alt="" />
                            </EstateImg>
                            <StandardsTit1>{this.props.ServiceStandards.get('detailTitle3')}</StandardsTit1>
                            <StandardsTit2>{this.props.ServiceStandards.get('detailEng3')}</StandardsTit2>
                            <StandardsText>{this.props.ServiceStandards.get('detailText3')}</StandardsText>
                        </EstateBlock3>
                    </EstateBlock>
                </EstateWrapper>
            </EstateCon>


        )

    }
    componentDidMount() {
        //    console.log(123);
        this.props.Estates();

    }
}
const mapState = (state) => ({
    Estate: state.getIn(['business', 'Estate']),
    ServicePurposes: state.getIn(['business', 'ServicePurposes']),
    ServiceStandards: state.getIn(['business', 'ServiceStandards']),
    before: state.getIn(['business', 'before']),
    sell: state.getIn(['business', 'sell']),
    attract: state.getIn(['business', 'attract']),
    operation: state.getIn(['business', 'operation']),
    classify: state.getIn(['business', 'classify'])
})
const mapDispatch = (dispatch) => ({
    Estates() {
        dispatch(actionCreators.getEstateList())
    }
})

export default connect(mapState, mapDispatch)(Estate)