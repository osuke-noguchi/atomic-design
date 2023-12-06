import './App.css';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}

export default App;
