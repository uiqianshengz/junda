import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators';
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { DetailsWrapper, DetailsTit, DetailsCon, DetailsEng, DetailsImg, DetailsTitle1, DetailsText1, DetailsTitle2, DetailsText2 } from '../style'
const BusDetail = (props) => {
    // 返回顶部
    window.scrollTo(0, 0);
    const { BusDetails } = props;
    const [params] = useSearchParams();
    const id = params.getAll('id')[0]
    console.log(props);
    useEffect(() => {
        props.getBusDetails(id)
    }, [id])
    return (
        <DetailsWrapper>
            {BusDetails.size > 0 && (
                <DetailsCon>
                    <DetailsEng>
                        {props.BusDetails.toJS()[0].english}
                    </DetailsEng>
                    <DetailsTit>
                        {props.BusDetails.toJS()[0].title1}
                    </DetailsTit>
                    <p className='p'></p>
                    <DetailsImg>
                        <img src={props.BusDetails.toJS()[0].image} alt="" />
                    </DetailsImg>
                    <DetailsTitle1>
                        {props.BusDetails.toJS()[0].title2}
                    </DetailsTitle1>
                    <DetailsText1>
                        <ul>
                            <li>{props.BusDetails.toJS()[0].p1}</li>
                            <li>{props.BusDetails.toJS()[0].p2}</li>
                            <li>{props.BusDetails.toJS()[0].p3}</li>
                            <li>{props.BusDetails.toJS()[0].p4}</li>
                        </ul>
                    </DetailsText1>
                    <DetailsTitle2>
                        {props.BusDetails.toJS()[0].title3}
                    </DetailsTitle2>
                    <DetailsText2>
                        <p>{props.BusDetails.toJS()[0].text}</p>
                    </DetailsText2>
                </DetailsCon>

            )}
        </DetailsWrapper>
    )
}

const mapState = (state) => ({
    BusDetails: state.getIn(['project', 'BusDetails'])
})
const mapDispatch = (dispatch) => ({
    getBusDetails(id) {
        dispatch(actionCreators.getBusDetailsList(id))
    }
})
export default connect(mapState, mapDispatch)(BusDetail);
