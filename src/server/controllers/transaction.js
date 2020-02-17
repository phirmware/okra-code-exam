const { overview } = require('./overview');

exports.getTransactions = (req, res) => {
    res.json(overview.transactions);
};
