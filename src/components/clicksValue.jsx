import { useDispatch, useSelector } from 'react-redux';
import { update, getClicksValue } from 'redux/clicksSlice';
import { Counter } from 'components/CounterValue/CounterValue.styled';

export const ClicksValue = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(getClicksValue);
  // console.log(update());
  return (
    <Counter>
      <h4>Number of clicks(persist): {numberOfClicks}</h4>
      <button type="button" onClick={() => dispatch(update(5))}>
        {/* Number of clicks: {numberOfClicks} */}
        <br />
        Add 5 click
      </button>
      <button type="button" onClick={() => dispatch(update(10))}>
        {/* Number of clicks: {numberOfClicks} */}
        <br />
        Add 10 click
      </button>
      <button type="button" onClick={() => dispatch(update(20))}>
        {/* Number of clicks: {numberOfClicks} */}
        <br />
        Add 20 click
      </button>
    </Counter>
  );
};
