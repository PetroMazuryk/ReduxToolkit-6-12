import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/userSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);
  return (
    <div style={{ margin: 20 }}>
      {login}
      <br />
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};
