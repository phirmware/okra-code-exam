import React, { Component } from 'react';
import Transactions from '../containers/transactions';
import { Link } from 'react-router-dom';

export default class TransactionPage extends Component {
    render() {
        return (
            <span>
                <div className="jumbotron" style={{ height: "20vh" }}>
                    <div className="total">
                        <p style={{ textAlign: "center" }}>Transactions</p>
                        <div className="data-summary">
                            <Link className="btn btn-success" to="/transfer">
                                Make Transfer
                            </Link>
                        </div>
                    </div>
                </div>
                <Transactions />
            </span>
        )
    }
}
