// app/components/Results.js
import React, { PropTypes } from 'react'
import * as styles from '../styles'
import { Link } from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from '../containers/MainContainer'
import Loading from './Loading'
// var React = require('react');
// var PropTypes = React.PropTypes;
// var styles = require('../styles');
// var ReactRouter = require('react-router');
// var Link = ReactRouter.Link;
// var UserDetails = require('./UserDetails');
// var UserDetailsWrapper = require('./UserDetailsWrapper');
// var MainContainer = require('../containers/MainContainer');
// var Loading = require('./Loading');


function StartOver() {
    return (
        <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
            </Link>
        </div>
    )
}

function Tie(props) {
    return (
        <MainContainer>
            <h1>It‘s a Tie!</h1>
            <StartOver />
        </MainContainer>
    )
}

function Results(props) {
    if (props.isLoading === true) {
        return <Loading />
    }
    if (props.scores[0] === props.scores[1]) {
        return (
            <Tie scores={props.scores} playersInfo={props.playersInfo} />
        )
    }

    const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    const losingIndex = winningIndex === 0 ? 1 : 0;

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className='col–sm–8 col–sm–offset–2'>
                <UserDetailsWrapper header='Winner'>
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}


// module.exports = Results
export default Results