import { FC } from 'react';
import { Header } from '../base/Header';

export const Template: FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main>{children}</main>
      <footer>copywrite this awesome content</footer>
    </div>
  );
};
