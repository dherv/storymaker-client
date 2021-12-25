import Link from 'next/link';
import { FC } from 'react';
import { Novel } from '../../types/global';

export const NovelItem: FC<{ novel: Novel }> = ({ novel }) => {
  return (
    <li className="border-b-2 border-indigo-400" key={novel.id}>
      <div className="flex">
        {/* <Image src={cyber} alt="random picture for this novel" /> */}
        <div>
          <h3 className="antialiased capitalize text-xl mb-4">{novel.title}</h3>
          <div className="mb-4">
            {novel.pages[0].slice(0, 8).map((line, index) => (
              <p className="novel-paragraph" key={index}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Link href={`/novel/${novel.id}/page/1`}>
        <a className="underline decoration-sky-500 text-sky-500">
          show more...
        </a>
      </Link>
    </li>
  );
};
