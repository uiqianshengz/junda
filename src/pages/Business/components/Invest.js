import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {MediaCon, MediaWrapper, MediaTit1, MediaTit2, MediaText,MediaImg,MediaBlock
,EstateLast,EstatePosition,EstateWrapper,EstateTit1,EstateTit2,EstateText,
EstateFooter,EstateBlock,EstateBlock1,EstateImg,StandardsTit1,StandardsTit2,StandardsText,EstateBlock2
,EstateBlock3} from '../style'
class Invest extends Component {
    render() {
        return (
            <MediaCon>
            <MediaWrapper>
                <MediaTit1>{this.props.Invest.get('title1')}</MediaTit1>
                <MediaTit2>{this.props.Invest.get('title2')}</MediaTit2>
                <p></p>
                <MediaText>{this.props.Invest.get('text1')}</MediaText>
                <MediaText>{this.props.Invest.get('text2')}</MediaText>
            </MediaWrapper>
            <MediaWrapper>
            <MediaBlock>
                <MediaImg>
                    <img src={this.props.Invest.get('img1')} alt="" />
                    <span>物流整合投资</span>
                </MediaImg>
                <MediaImg>
                    <img src={this.props.Invest.get('img2')} alt="" />
                    <span>软件平台打造</span>
                </MediaImg>
            </MediaBlock>
            </MediaWrapper>
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
        </MediaCon>
        );
    }
    componentDidMount() {
        this.props.Invests();
        // 返回顶部
        window.scrollTo(0, 0);
    }
}
const mapState = (state) => ({
    Invest: state.getIn(['business', 'Invest']),
    ServicePurposes: state.getIn(['business', 'ServicePurposes']),
    ServiceStandards: state.getIn(['business', 'ServiceStandards']),
})
const mapDispatch = (dispatch) => ({
    Invests() {
        dispatch(actionCreators.getEstateList())
    }
})
export default connect(mapState, mapDispatch)(Invest);
