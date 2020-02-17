import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOverview } from '../actions/index';
import TransactionCard from '../components/transaction_card';

class Transactions extends Component {

    componentDidMount() {
        this.props.getOverview();
    }

    render() {
        return (
            <div className="container">
                <TransactionCard transactions={this.props.overview.transactions} />
            </div>
        )
    }
}


function mapStateToProps({ overview }) {
    return { overview };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getOverview }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);