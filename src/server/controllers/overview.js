exports.overview = {
    total_credits: 37820.12,
    total_debits: 17670.65,
    total_balance: 51781.08,
    transactions: [
        {
            action: 'bank transfer',
            type: 'credit',
            amount: 5120.87,
            date: Date.now()
        },
        {
            action: 'airtime subscription',
            type: 'debit',
            amount: 3111.12,
            date: Date.now()
        },
        {
            action: 'Ikeja electric',
            type: 'debit',
            amount: 105000.00,
            date: Date.now()
        }
    ],
};

exports.getOverview = (req, res) => {
    res.json(this.overview);
};

function updateOverview({action, type, amount, date}) {
    this.overview.total_balance = this.overview.total_balance - amount;
    this.overview.total_debits = this.overview.total_debits + amount;
}

exports.makeTransaction = (req, res) => {
    const { action, type, amount, date } = req.body;
    if (!action || !type || !amount || !date) return res.status(404).json({ message: 'Missing Info' });
    const newTransaction = { action, type, amount, date }

    let handleUpdate = updateOverview.bind(this);
    handleUpdate(newTransaction);

    this.overview.transactions.push(newTransaction);

    res.json(this.overview);
};
