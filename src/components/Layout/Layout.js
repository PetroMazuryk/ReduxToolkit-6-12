import css from './Layout.module.css';
import { Link, Outlet } from 'react-router-dom';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { AppBar } from 'components/AppBar/AppBar';
import { CounterValue } from 'components/CounterValue/CounterValue';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu';
import { ClicksValue } from 'components/clicksValue';
import { Section } from 'components/Section/Section';

export const Layout = () => {
  const isLoggetIn = useSelector(state => state.user.isLoggedIn);
  return (
    <main className={css.container}>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 22,
          borderBottom: 'solid',
          paddingBottom: 8,
        }}
      >
        {!isLoggetIn && <Link to="/login">Log in</Link>}
        {isLoggetIn && <Link to="/dashboard">Dashboard</Link>}

        {isLoggetIn && <UserMenu />}
      </nav>
      <Outlet />
      <div>
        <AppBar />
        <TaskForm />
        <TaskList />
        <Section>
          <CounterValue />
        </Section>
        <Section>
          <ClicksValue />
        </Section>
      </div>
    </main>
  );
};
