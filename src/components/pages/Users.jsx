import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `山田${val}`,
    image: 'https://source.unsplash.com/NE0XGVKTmcA',
    email: 'example.com',
    phone: '090-0009-8092',
    company: {
      name: 'test会社',
    },
    website: 'https://test.com',
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput></SearchInput>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
