const coins = [100, 50, 25, 10, 5, 1];
const lastIndex = coins[coins.length - 1] === 1
    ? coins[coins.length - 2]
    : coins[coins.length - 1];
let msg = '';

const changeCalculation = (purchasePrice, paidPrice) => {
    const change = paidPrice - purchasePrice;

    const result =
        [
            [change => { return change > 0 }, coinsCalculation(change)],
            [change => { return change < 0 }, 'Não é possível calcular troco negativo!'],
            [change => { return change === 0 }, 'Não é necessário troco!']
        ].find(array => {
            return array[0](change);
        });

    return result[1];
}

const coinsCalculation = change => {
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
}

exports.changeCalculation = changeCalculation;