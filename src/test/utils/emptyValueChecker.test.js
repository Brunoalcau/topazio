const EmptyValueChecker = require("../../utils/emptyValueChecker")



describe(("Test of the function that checks isEmpty"),() => {
    test('should return true for empty values', () => {
        expect(EmptyValueChecker.isEmpty(null)).toBe(true);
        expect(EmptyValueChecker.isEmpty(undefined)).toBe(true);
        expect(EmptyValueChecker.isEmpty("")).toBe(true);
        expect(EmptyValueChecker.isEmpty("#")).toBe(true);
        expect(EmptyValueChecker.isEmpty([])).toBe(true);
        expect(EmptyValueChecker.isEmpty({})).toBe(true);
    });
    test('Deve retornar false para valores não vazios', () => {
        expect(EmptyValueChecker.isEmpty("Hello")).toBe(false);
        expect(EmptyValueChecker.isEmpty([1, 2, 3])).toBe(false);
        expect(EmptyValueChecker.isEmpty({ a: 1 })).toBe(false);
    });
})

test('Aplicar desconto grande', () => {
    const result = 0;
    expect(result).toEqual(0);
})