import './App.css';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SearchInput } from './components/molecules/SearchInput';

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput></SearchInput>
    </div>
  );
}

export default App;
