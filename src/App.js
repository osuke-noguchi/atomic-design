import './App.css';
import { UserProvider } from './components/providers/UserProvider';
import { Router } from './router/Router';

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
