const coins = [100, 50, 25, 10, 5, 1];

const changeCalculation = (purchasePrice, paidPrice) => {
    let change = paidPrice - purchasePrice;
    let msg = '';
    let lastIndex = coins[coins.length - 1] === 1
        ? coins[coins.length - 2]
        : coins[coins.length - 1];

    if (change > 0) {
        for (x in coins) {
            if (change >= coins[x]) {
                const amount = parseInt(change / coins[x]);

                msg += amount + " moeda de " + coins[x] + " centavos\n";

                change -= (amount * coins[x]);
            }

            if (change < lastIndex && change > 0) {
                return 'Não temos troco para este valor... Desculpe!';
            }
        }
        return msg;
    } else if (change < 0) {
        return 'Não é possível calcular troco negativo!';
    } else {
        return 'Não é necessário troco!';
    }
}

exports.changeCalculation = changeCalculation;