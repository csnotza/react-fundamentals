// app/containers/MainContainers.js
import React from 'react'
import * as styles from '../styles'
// var React = require('react');
// var styles = require('../styles');

function MainContainer(props) {
    return (
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
            {props.children}
        </div>
    )
}

// module.exports = MainContainer;
export default MainContainer