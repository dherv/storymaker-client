import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NovelItem } from './NovelItem';
import { NovelList } from './NovelList';

export default {
  title: "NovelList",
  component: NovelList,
  subcomponents: { NovelItem },
  args: {
    novels: [
      {
        id: 1,
        uuid: "123",
        title: "a novel title",
        category: "cyberpunk",
        filename: "a novel title",
        likes: 0,
        views: 0,
        pages: 5,
        words: 3000,
        readTime: 120,
        synopsis:
          "Tenderloin pork loin alcatra boudin short loin turducken capicola shankle jowl. Meatball sirloin filet mignon, bresaola jowl turkey kevin short ribs pancetta kielbasa venison shankle tongue ribeye. Chuck tri-tip kevin landjaeger tenderloin burgdoggen shankle bresaola jowl filet mignon alcatra pork loin corned beef rump. Corned beef boudin/",
      },
    ],
  },
} as ComponentMeta<typeof NovelList>;

export const OneItem: ComponentStory<typeof NovelList> = (args) => (
  <NovelList {...args}>
    <NovelItem novel={args.novels[0]} />
  </NovelList>
);
