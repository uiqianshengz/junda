import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators';
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { DetailsWrapper,DetailsTit} from '../style'
const BusDetails = (props) => {
    const { BusDetails } = props;
    const [params] = useSearchParams();
    const id=params.getAll('id')[0]
    console.log(id);
    useEffect(() => {
        props.getBusDetails(id)
    }, [id])
    return (
        <DetailsWrapper>
            {BusDetails.size > 0 && (
                <DetailsTit>
                    {props.BusDetails.toJS()[0].title1}
                </DetailsTit>
            )} 
        </DetailsWrapper>
    )
}

const mapState = (state) => ({
    BusDetails:state.getIn(['project','BusDetails'])
})
const mapDispatch = (dispatch) => ({
    getBusDetails(id) {
        dispatch(actionCreators.getBusDetailsList(id))
    }
})
export default connect(mapState, mapDispatch)(BusDetails);
