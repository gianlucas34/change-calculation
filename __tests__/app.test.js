const { changeCalculation } = require('../app');

describe("Change calculation", () => {
    it("should maintain behavior for other sets of currencies", () => {
        expect(changeCalculation(10, 25)).toBe('1 moeda de 10 centavos\n1 moeda de 5 centavos\n');
    });

    it("should return an error when the change is negative", () => {
        expect(changeCalculation(10, 5)).toBe('Não é possível calcular troco negativo!');
    });

    it("should return an error when the change value is less than the lowest currency value", () => {
        expect(changeCalculation(10, 14)).toBe('Não temos troco para este valor... Desculpe!');
    });
});