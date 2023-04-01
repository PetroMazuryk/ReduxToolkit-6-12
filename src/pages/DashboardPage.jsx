import { UserMenu } from 'components/UserMenu';

import { useSelector } from 'react-redux';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export const DashboardPage = () => {
  useLogOutRedirect();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <div style={{ margin: 20, textAlign: 'center', fontSize: 40 }}>
      {isLoggedIn && <UserMenu />}
      DashboardPage
    </div>
  );
};
