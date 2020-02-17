import React, { Component } from 'react';
import { connect } from 'react-redux';

class Overview extends Component {

    constructor() {
        super();

        this.state = {
            overview: null
        }
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="total">
                    <p>Total Balance</p>
                    <p className="balance">{this.props.overview.total_balance}</p>
                    <br />
                    <div className="data-summary">
                        <hr />
                        <p className="total-trans total-credits">
                            Total Credits
                            <br />
                            {this.props.overview.total_credits}
                        </p>
                        <p className="total-trans total-debits">
                            Total Debits
                            <br />
                            {this.props.overview.total_debits}
                        </p>
                        <button className="btn btn-success">Connect Your Bank</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ overview }) {
    return { overview }
}

export default connect(mapStateToProps)(Overview);
