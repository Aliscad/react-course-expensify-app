import expensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const total = expensesTotal([]);
    expect(total).toBe(0);
});

test('should add up single expense', () => {
    const total = expensesTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('should add up multiple expenses', () => {
    const total = expensesTotal(expenses);
    expect(total).toBe(114195);
});