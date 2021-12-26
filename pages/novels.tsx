// get all stories
import { FC } from 'react';
import { NovelList } from '../components/base/NovelList';
import { NovelMeta } from '../types/global';

const Novels: FC<{ novels: NovelMeta[] }> = ({ novels }) => {
  return <NovelList novels={novels} />;
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:8080/api/meta");
  const novels = await res.json();
  console.log({ novels });
  // By returning { props: { novels } }, the Blog component
  // will receive `novels` as a prop at build time
  return {
    props: {
      novels,
    },
  };
}

export default Novels;
