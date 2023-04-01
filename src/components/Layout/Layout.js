import css from './Layout.module.css';
import { Link, Outlet } from 'react-router-dom';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { AppBar } from 'components/AppBar/AppBar';
import { CounterValue } from 'components/CounterValue/CounterValue';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu';
export const Layout = () => {
  const isLoggetIn = useSelector(state => state.user.isLoggedIn);
  return (
    <main className={css.container}>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {!isLoggetIn && <Link to="/login">Log in</Link>}
        {isLoggetIn && <Link to="/dashboard">Dashboard</Link>}

        {isLoggetIn && <UserMenu />}
      </nav>
      <Outlet />
      <div>
        <AppBar />
        <TaskForm />
        <TaskList />

        <CounterValue />
      </div>
    </main>
  );
};
