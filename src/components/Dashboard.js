import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
    render() {
        console.log(this.props)
        return <div>
            <h3 className='center'>Your timeline</h3>
            <ul className='dashboard-list'>
                {this.props.tweetIds.map(id => (
                    <li key={id}>
                        <div>TWEET ID: { id }</div>
                    </li>
                ))}
            </ul>
        </div>
    }
}

function mapSttateToProps({ tweets }) {
    return {
        'tweetIds': Object.keys(tweets)
        .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapSttateToProps)(Dashboard)