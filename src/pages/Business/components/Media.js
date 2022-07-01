import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {MediaCon, MediaWrapper, MediaTit1, MediaTit2, MediaText,MediaImg,MediaBlock
,EstateLast,EstatePosition,EstateWrapper,EstateTit1,EstateTit2,EstateText,
EstateFooter,EstateBlock,EstateBlock1,EstateImg,StandardsTit1,StandardsTit2,StandardsText,EstateBlock2
,EstateBlock3} from '../style'
class Media extends Component {
    render() {
        return (
            <MediaCon>
                <MediaWrapper>
                    <MediaTit1>{this.props.Media.get('title1')}</MediaTit1>
                    <MediaTit2>{this.props.Media.get('title2')}</MediaTit2>
                    <p></p>
                    <MediaText>{this.props.Media.get('text1')}</MediaText>
                    <MediaText>{this.props.Media.get('text2')}</MediaText>
                </MediaWrapper>
                <MediaWrapper>
                <MediaBlock>
                    <MediaImg>
                        <img src={this.props.Media.get('img1')} alt="" />
                        <span>文案策划</span>
                    </MediaImg>
                    <MediaImg>
                        <img src={this.props.Media.get('img2')} alt="" />
                        <span>平面设计</span>
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
        this.props.Medias();
    }
}
const mapState = (state) => ({
    Media: state.getIn(['business', 'Media']),
    ServicePurposes: state.getIn(['business', 'ServicePurposes']),
    ServiceStandards: state.getIn(['business', 'ServiceStandards']),
})
const mapDispatch = (dispatch) => ({
    Medias() {
        dispatch(actionCreators.getEstateList())
    }
})
export default connect(mapState, mapDispatch)(Media);
