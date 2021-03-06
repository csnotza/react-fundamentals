// app/utils/githubHelpers.js
// var axios = require('axios');
import axios from 'axios'

const id = "fe3959b93bdd94dbcc17";
const sec = "dc5608cb97a63f2b0e8f0d38f2b337324e323574";
const param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {

    return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');

}

function getTotalStars(repos) {

    return repos.data.reduce(function (prev, current) {

        return prev + current.stargazers_count

    }, 0)

}

function getPlayersData(player) {

    return getRepos(player.login)

        .then(getTotalStars)

        .then(function (totalStars) {

            return {

                followers: player.followers,

                totalStars: totalStars

            }

        })

}

function calculateScores(players) {

    return [

        players[0].followers * 3 + players[0].totalStars,

        players[1].followers * 3 + players[1].totalStars

    ]

}

const helpers = {

    getPlayersInfo: function (players) {

        return axios.all(players.map(function (username) {

            return getUserInfo(username)

        }))

            .then(function (info) {

                return info.map(function (user) {

                    return user.data

                })

            })

            .catch(function (err) { console.warn('Error in getPlayersInfo: ', err) })

    },

    battle: function (players) {

        const playerOneData = getPlayersData(players[0]);

        const playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])

            .then(calculateScores)

            .catch(function (err) { console.warn('Error in getPlayersInfo: ', err) })

    }

};


// module.exports = helpers;
export default helpers