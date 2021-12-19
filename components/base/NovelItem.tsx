import Link from "next/link";
import { FC } from "react";
import { Novel } from "../../types/global";

export const NovelItem: FC<{ novel: Novel }> = ({ novel }) => {
  return (
    <li className="" key={novel.id}>
      <h3>{novel.title}</h3>
      <div>
        {novel.pages[0].slice(0, 8).map((line, index) => (
          <p className="novel-paragraph" key={index}>
            {line}
          </p>
        ))}
      </div>
      <Link href={`/novel/${novel.id}/page/1`}>show more...</Link>
    </li>
  );
};
