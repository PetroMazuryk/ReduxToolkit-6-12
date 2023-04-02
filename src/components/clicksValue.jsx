import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/clicksSlice';
import { Counter } from 'components/CounterValue/CounterValue.styled';

export const ClicksValue = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(state => state.clicks.value);
  return (
    <Counter>
      <button type="button" onClick={() => dispatch(update())}>
        Number of clicks: {numberOfClicks}
      </button>
    </Counter>
  );
};
