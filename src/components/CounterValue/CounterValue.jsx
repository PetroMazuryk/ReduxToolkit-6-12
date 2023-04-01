import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from 'redux/myValue';
import { Counter } from './CounterValue.styled';

export const CounterValue = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  return (
    <Counter>
      {value}
      <button onClick={() => dispatch(increment(100))}>Increment</button>
      <button onClick={() => dispatch(decrement(100))}>Decrement</button>
    </Counter>
  );
};
