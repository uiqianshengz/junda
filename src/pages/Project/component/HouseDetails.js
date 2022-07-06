import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators';
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { DetailsWrapper, DetailsTit, DetailsCon, DetailsEng, DetailsImg, DetailsTitle1, DetailsText1, DetailsTitle2, DetailsText2 } from '../style'
const Housedetails = (props) => {
    const { HouseDetails } = props;
    const [params] = useSearchParams();
    const id = params.getAll('id')[0]
    console.log(props);
    useEffect(() => {
        props.getHouseDetails(id)
    }, [id])
    return (
        <DetailsWrapper>
            {HouseDetails.size > 0 && (
                <DetailsCon>
                    <DetailsEng>
                        {props.HouseDetails.toJS()[0].english}
                    </DetailsEng>
                    <DetailsTit>
                        {props.HouseDetails.toJS()[0].title1}
                    </DetailsTit>
                    <p className='p'></p>
                    <DetailsImg>
                        <img src={props.HouseDetails.toJS()[0].image} alt="" />
                    </DetailsImg>
                    <DetailsTitle1>
                        {props.HouseDetails.toJS()[0].title2}
                    </DetailsTitle1>
                    <DetailsText1>
                        <ul>
                            <li>{props.HouseDetails.toJS()[0].p1}</li>
                            <li>{props.HouseDetails.toJS()[0].p2}</li>
                            <li>{props.HouseDetails.toJS()[0].p3}</li>
                            <li>{props.HouseDetails.toJS()[0].p4}</li>
                        </ul>
                    </DetailsText1>
                    <DetailsTitle2>
                        {props.HouseDetails.toJS()[0].title3}
                    </DetailsTitle2>
                    <DetailsText2>
                        <p>{props.HouseDetails.toJS()[0].text1}</p>
                        <p>{props.HouseDetails.toJS()[0].text2}</p>
                    </DetailsText2>
                </DetailsCon>

            )}
        </DetailsWrapper>
    )
}

const mapState = (state) => ({
    HouseDetails: state.getIn(['project', 'HouseDetails'])
})
const mapDispatch = (dispatch) => ({
    getHouseDetails(id) {
        dispatch(actionCreators.getHouseDetailsList(id))
    }
})
export default connect(mapState, mapDispatch)(Housedetails);
