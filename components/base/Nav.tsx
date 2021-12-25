import Link from 'next/link';
import { FC } from 'react';

export const Nav: FC = () => {
  return (
    <nav>
      <Link href="/novels">home</Link>
    </nav>
  );
};
