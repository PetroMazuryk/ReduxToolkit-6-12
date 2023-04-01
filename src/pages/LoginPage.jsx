import { LoginForm } from 'components/LoginForm';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
export const LoginPage = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <div style={{ display: 'flex', margin: 20, justifyContent: 'center' }}>
      <LoginForm />
      {isLoggedIn && <UserMenu />}
    </div>
  );
};
