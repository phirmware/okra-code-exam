import React, { Component } from 'react';
import Overview from '../containers/overview';
import Transactions from '../containers/transactions';

export default class Home extends Component {
    render() {
        return (
            <span>
                <Overview />
                <div className="container">
                    <p className="body-header" style={{width: "90%", margin: "auto"}}>Transaction History</p>
                </div>
                <Transactions />
            </span>
        )
    }
}