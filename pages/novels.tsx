// get all stories
import { FC } from 'react';
import { NovelItem } from '../components/base/NovelItem';
import { Novel } from '../types/global';

const Novels: FC<{ novels: Novel[] }> = ({ novels }) => {
  return (
    <ul className="max-w-5xl mx-auto ">
      {novels.map((novel) => (
        <NovelItem key={novel.id} novel={novel} />
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:8080/api/");
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
