import React from 'react';

function renderTransactions(transaction, i) {
    return (
        <div className="card" key={i}>
            <div className="card-body text-capitalize">
                <div className="type">
                    <p>{transaction.action}</p>
                    <p>02 jul 19</p>
                </div>
                <div className="amount">
                    <p>{transaction.amount}</p>
                    <p>{transaction.type}</p>
                </div>
            </div>
        </div>
    )
}

export default ({ transactions }) => {
    return (
        transactions ? transactions.map(renderTransactions) : <span>null</span>
    )
}