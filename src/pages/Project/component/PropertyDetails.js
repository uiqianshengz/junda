import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators';
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { DetailsWrapper, DetailsTit, DetailsCon, DetailsEng, DetailsImg, DetailsTitle1, DetailsText1, DetailsTitle2, DetailsText2 } from '../style'
const Propertydetails = (props) => {
    // 返回顶部
    window.scrollTo(0, 0);
    const { PropertyDetails } = props;
    const [params] = useSearchParams();
    const id = params.getAll('id')[0]
    console.log(props);
    useEffect(() => {
        props.getPropertyDetails(id)
    }, [id])
    return (
        <DetailsWrapper>
            {PropertyDetails.size > 0 && (
                <DetailsCon>
                    <DetailsEng>
                        {props.PropertyDetails.toJS()[0].english}
                    </DetailsEng>
                    <DetailsTit>
                        {props.PropertyDetails.toJS()[0].title1}
                    </DetailsTit>
                    <p className='p'></p>
                    <DetailsImg>
                        <img src={props.PropertyDetails.toJS()[0].image} alt="" />
                    </DetailsImg>
                    <DetailsTitle1>
                        {props.PropertyDetails.toJS()[0].title2}
                    </DetailsTitle1>
                    <DetailsText1>
                        <ul>
                            <li>{props.PropertyDetails.toJS()[0].p1}</li>
                            <li>{props.PropertyDetails.toJS()[0].p2}</li>
                            <li>{props.PropertyDetails.toJS()[0].p3}</li>
                            <li>{props.PropertyDetails.toJS()[0].p4}</li>
                        </ul>
                    </DetailsText1>
                    <DetailsTitle2>
                        {props.PropertyDetails.toJS()[0].title3}
                    </DetailsTitle2>
                    <DetailsText2>
                        <p>{props.PropertyDetails.toJS()[0].text1}</p>
                    </DetailsText2>
                </DetailsCon>

            )}
        </DetailsWrapper>
    )
}

const mapState = (state) => ({
    PropertyDetails: state.getIn(['project', 'PropertyDetails'])
})
const mapDispatch = (dispatch) => ({
    getPropertyDetails(id) {
        dispatch(actionCreators.getPropertyDetailsList(id))
    }
})
export default connect(mapState, mapDispatch)(Propertydetails);
