import Link from 'next/link';
import { FC } from 'react';
import {
  ClockIcon,
  EyeIcon,
  PencilIcon,
  ThumbUpIcon,
} from '@heroicons/react/outline';
import { NovelMeta } from '../../types/global';
import { NovelDetail } from './NovelDetail';
import { Tag } from './Tag';

export const NovelItem: FC<{ novel: NovelMeta }> = ({ novel }) => {
  console.log(`/novel/${novel.id}/page/1`);
  return (
    <li
      className="md:max-w-3xl mx-auto my-4 p-6 bg-white rounded shadow-md hover:cursor-pointer"
      key={novel.id}
    >
      <Link href={`/novel/${novel.id}/page/1`}>
        <div className="flex">
          <div>
            <h3 className="antialiased capitalize text-3xl">{novel.title}</h3>
            <p className="mt-1 mb-4 text-gray-400 text-xs font-light">
              25 Decembre 2021
            </p>
            <div className="mb-4 text-sm font-light">
              <p>{novel.synopsis}</p>
            </div>
            <Tag text={novel.category} />
            <ul className="flex flex-wrap mt-6">
              <NovelDetail text="views" data={novel.views} Icon={EyeIcon} />
              <NovelDetail text="likes" data={novel.likes} Icon={ThumbUpIcon} />
              <NovelDetail
                text="words"
                data={novel.word_count}
                Icon={PencilIcon}
              />
              <NovelDetail
                text="read"
                data={`${Math.round(novel.word_count / 200)} min`}
                Icon={ClockIcon}
              />
            </ul>
          </div>
        </div>
      </Link>
    </li>
  );
};
