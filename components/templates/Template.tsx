import { FC } from 'react';

export const Template: FC = ({ children }) => {
  return (
    <>
      <header>damien</header>
      <main>{children}</main>
      <footer>copywrite this awesome content</footer>
    </>
  );
};
