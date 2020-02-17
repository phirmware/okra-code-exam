import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransferForm from '../containers/transfer_form';

export default class Transfer extends Component {
    render() {
        return (
            <span>
                <div className="jumbotron" style={{ height: "20vh" }}>
                    <div className="total">
                        <p style={{ textAlign: "center" }}>Transfer Money</p>
                        <div className="data-summary">
                            <Link className="btn btn-success" to="/transactions">
                                Transactions
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <TransferForm />
                </div>
            </span>
        )
    }
}