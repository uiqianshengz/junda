import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators';
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { DetailsWrapper, DetailsItem, DetailsTit, DetailsDate, DetailsCon, DetailsImg, DetailsMen } from '../style'
const NewsDetail = (props) => {
    // 返回顶部
    window.scrollTo(0, 0);
    const { NewsDetails } = props;
    const [params] = useSearchParams();
    const id = params.getAll('id')[0]
    console.log(props);
    useEffect(() => {
        props.getNewsDetails(id)
    }, [id])
    return (
        <DetailsWrapper>
            {NewsDetails.size > 0 && (
                <DetailsItem>
                    <DetailsTit>{props.NewsDetails.toJS()[0].title}</DetailsTit>
                    <DetailsDate>{props.NewsDetails.toJS()[0].date}</DetailsDate>
                    <DetailsMen>
                        <DetailsCon>{props.NewsDetails.toJS()[0].p1}</DetailsCon>
                        <DetailsImg>
                            <img src={props.NewsDetails.toJS()[0].imgurl} alt="" />
                        </DetailsImg>
                        <DetailsCon>{props.NewsDetails.toJS()[0].p2}</DetailsCon>
                        <DetailsImg>
                            <img src={props.NewsDetails.toJS()[0].imgurl1} alt="" />
                        </DetailsImg>
                        <DetailsCon>{props.NewsDetails.toJS()[0].p3}</DetailsCon>
                        <DetailsImg>
                            <img src={props.NewsDetails.toJS()[0].imgurl2} alt="" />
                        </DetailsImg>
                        <DetailsCon>{props.NewsDetails.toJS()[0].p4}</DetailsCon>
                        <DetailsImg>
                            <img src={props.NewsDetails.toJS()[0].imgurl3} alt="" />
                        </DetailsImg>
                        <DetailsCon>{props.NewsDetails.toJS()[0].p5}</DetailsCon>
                        <DetailsImg>
                            <img src={props.NewsDetails.toJS()[0].imgurl4} alt="" />
                        </DetailsImg>
                        <DetailsCon>{props.NewsDetails.toJS()[0].p6}</DetailsCon>
                    </DetailsMen>
                </DetailsItem>
            )}
        </DetailsWrapper>
    )
}

const mapState = (state) => ({
    NewsDetails: state.getIn(['news', 'NewsDetails'])
})
const mapDispatch = (dispatch) => ({
    getNewsDetails(id) {
        dispatch(actionCreators.getNewsDetailsList(id))
    }
})
export default connect(mapState, mapDispatch)(NewsDetail);
