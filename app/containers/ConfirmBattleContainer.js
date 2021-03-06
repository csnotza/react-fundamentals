// app/containers/ConfirmBattleContainer.js
import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'
// var React = require('react');
// var ConfirmBattle = require('../components/ConfirmBattle');
// var githubHelpers = require('../utils/githubHelpers');

const ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true,
            playersInfo: [],
        }
    },
    componentDidMount: function () {
        // console.log(this.props);
        const { query } = this.props.location;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function (players) {
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
                })
            }.bind(this))
        // Fetch info from github then update state
    },
    handleInitiateBattle: function () {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    },
    render: function () {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handleInitiateBattle}
                playersInfo={this.state.playersInfo} />
        )
    }
});

// module.exports = ConfirmBattleContainer;
export default ConfirmBattleContainer