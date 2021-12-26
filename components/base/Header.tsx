import { FC } from 'react';
import { Nav } from './Nav';
import { Title } from './Title';

export const Header: FC = () => {
  return (
    <header className="flex justify-between w-screen">
      <Title></Title>
      <Nav></Nav>
    </header>
  );
};
