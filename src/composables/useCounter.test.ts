import { useCounter } from './useCounter';

describe('useConunter ', () => {
  test('defaul value', () => {
    const initialValue = 5;
    const { counter, squareCounter } = useCounter();
    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('initial value', () => {
    const initialValue = 10;
    const { counter } = useCounter(initialValue);
    expect(counter.value).toBe(initialValue);
  });

  test('incremen value', () => {
    const initialValue = 5;
    const newValue = initialValue + 1;
    const { counter, squareCounter } = useCounter(initialValue);
    counter.value++;

    expect(counter.value).toBe(newValue);
    expect(squareCounter.value).toBe(newValue * newValue);
  });
});
