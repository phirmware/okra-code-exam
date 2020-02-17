import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeTransaction } from '../actions/index';

class TransferForm extends Component {

    constructor() {
        super();

        this.state = {
            action: '',
            type: 'debit',
            amount: 0,
            date: 0
        }
    }
    makeTransfer(e) {
        e.preventDefault();
        const date = Date.now();
        this.setState({date});
        this.props.makeTransaction(this.state);
    }

    render() {
        return (
            <form onSubmit={(e) => { this.makeTransfer(e) }}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Reason for transfer" id="email" value={this.state.action} onChange={(e) => { this.setState({ action: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Enter Amount" id="pwd" value={this.state.amount} onChange={(e) => { this.setState({ amount: e.target.value }) }} />
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        )
    }
}

function mapStateToProps({ overview }) {
    return { overview };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ makeTransaction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TransferForm);
