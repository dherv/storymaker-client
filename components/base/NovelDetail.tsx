import { FC } from 'react';

export const NovelDetail: FC<{
  text: string;
  data: number | string;
  Icon: any;
}> = ({ text, data, Icon }) => {
  return (
    <li className="flex align-middle mr-4 text-gray-600 text-xs font-extralight leading-4">
      <Icon className="h-4 w-4 mr-1" />
      <span className="mr-1">{data}</span>
      <span>{text}</span>
    </li>
  );
};
