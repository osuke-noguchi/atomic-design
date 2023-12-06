import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayouts';

const user = {
  name: '山田',
  image: 'https://source.unsplash.com/NE0XGVKTmcA',
  email: 'example.com',
  phone: '090-0009-8092',
  company: {
    name: 'test会社',
  },
  website: 'https://test.com',
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput></SearchInput>
        <UserCard user={user}></UserCard>
      </DefaultLayout>
    </BrowserRouter>
  );
}
