import Link from 'next/link';
import { FC } from 'react';
import { Novel } from '../../../../types/global';

const NovelPage: FC<{ page: string[]; novel: Novel; pageNumber: number }> = ({
  page,
  novel,
  pageNumber,
}) => {
  console.log(page.join("\n"));
  const current = Number(pageNumber);
  const previous =
    current - 1 === 0 ? "/novels" : `/novel/${novel.id}/page/${current - 1}`;
  const next =
    current + 1 === novel.pages.length
      ? "/novels"
      : `/novel/${novel.id}/page/${current + 1}`;
  return (
    <>
      <h1 className="text-center my-8 uppercase antialiased">{novel.title}</h1>
      <p className="novel-paragraph">{page.join("\n")}</p>
      <div className="flex align-middle justify-center">
        <Link href={previous}>pre</Link>
        <p className="text-center my-8">{pageNumber}</p>
        <Link href={next}>next</Link>
      </div>
    </>
  );
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
  // TODO: refactor API to get novel data with each page
  const res_novel = await fetch(`http://localhost:8080/api/${params.id}`);
  const novel = await res_novel.json();
  const res = await fetch(
    `http://localhost:8080/api/${params.id}/page/${params.page}`
  );
  const page = await res.json();

  // Pass page data to the page via props
  return { props: { page, novel, pageNumber: params.page } };
}
