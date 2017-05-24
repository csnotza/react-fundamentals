// app/components/Main.js
// var React = require('react');
// var ReactRouter = require('react-router');
// var Link = ReactRouter.Link
// var transparentBg = require('../styles').transparentBg;
// var MainContainer = require('../containers/MainContainer');

import React from 'react'
import { Link } from 'react-router'
import { transparentBg } from '../styles'
import MainContainer from '../containers/MainContainer'

var Main = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});

// module.exports = Main;
export default Main