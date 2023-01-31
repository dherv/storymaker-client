import { FC } from 'react';
import { Header } from '../base/Header';

export const Template: FC = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <Header></Header>
      <main className="mx-auto md:w-full">{children}</main>
      <footer>copywrite this awesome content</footer>
    </div>
  );
};
