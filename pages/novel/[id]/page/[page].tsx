import { FC } from 'react';
import { Novel } from '../../../../types/global';

const NovelPage: FC<{ page: string }> = ({ page }) => {
  return <p className="story-paragraph">{page}</p>;
};

export default NovelPage;

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get novels
  const res = await fetch("http://localhost:8080/api/");
  const novels = await res.json();
  // Get the paths we want to pre-render based on novels
  const paths = novels.flatMap((novel: Novel) => {
    return novel.pages.reduce((acc, _, index): any => {
      return [
        ...acc,
        { params: { id: novel.id, page: (index + 1).toString() } },
      ];
    }, []);
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({
  params,
}: {
  params: { id: string; page: number };
}) {
  // params contains the post `id`.
  // If the route is like /novels/1, then params.id is 1
  const res = await fetch(
    `http://localhost:8080/api/${params.id}/page/${params.page}`
  );
  const page = await res.json();

  // Pass page data to the page via props
  return { props: { page } };
}
