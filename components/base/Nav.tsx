import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { ViewGridIcon } from '@heroicons/react/outline';

export const Nav: FC = () => {
  const router = useRouter();
  console.log(router.pathname);
  const shouldShowListIcon = router.pathname !== "/novels";
  return (
    <nav>
      {shouldShowListIcon ? (
        <Link href="/novels">
          <ViewGridIcon className="w-5 h-5 hover:cursor-pointer" />
        </Link>
      ) : null}
    </nav>
  );
};
