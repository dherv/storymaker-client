import { FC } from 'react';

export const Tag: FC<{ text: string }> = ({ text }) => {
  return (
    <span className="px-4 py-1 bg-gray-600 text-white text-xs font-bold rounded-xl">
      {text}
    </span>
  );
};
