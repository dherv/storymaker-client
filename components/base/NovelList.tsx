import { FC } from 'react';
import { NovelMeta } from '../../types/global';
import { NovelItem } from './NovelItem';

export const NovelList: FC<{ novels: NovelMeta[] }> = ({ novels }) => {
  return (
    <ul>
      {novels.map((novel) => (
        <NovelItem key={novel.id} novel={novel} />
      ))}
    </ul>
  );
};
