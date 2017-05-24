// app/containers/ResultsContainer.js

// var React = require('react');
// var Results = require('../components/Results');
// var githubHelpers = require('../utils/githubHelpers');
import React from 'react'
import Results from '../components/Results'
import githubHelpers from '../utils/githubHelpers'



const ResultsContainer = React.createClass({
    getInitialState: function () {

        return {

            isLoading: true,

            scores: []

        }

    },

    componentDidMount: function () {

        githubHelpers.battle(this.props.location.state.playersInfo)

            .then(function (scores) {

                this.setState({

                    scores: scores,

                    isLoading: false

                })

            }.bind(this))

    },

    render: function () {

        return (

            <Results

                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores} />

        )

    }

})



// module.exports = ResultsContainer
export default ResultsContainer