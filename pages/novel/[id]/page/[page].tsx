import Link from 'next/link';
import { FC } from 'react';
import { NovelMeta } from '../../../../types/global';

const NovelPage: FC<{
  text: string[];
  novel: NovelMeta;
  id: string;
  pageNumber: number;
}> = ({ text, novel, id, pageNumber }) => {
  const current = Number(pageNumber);
  const previous =
    current - 1 === 0 ? "/novels" : `/novel/${id}/page/${current - 1}`;
  const next =
    // FIXME: replace by place_count
    current + 1 === novel.page_count
      ? "/novels"
      : `/novel/${id}/page/${current + 1}`;

  console.log({ novel, next });
  return (
    <>
      <h1 className="text-center my-8 uppercase antialiased">{novel.title}</h1>
      <p className="novel-paragraph">{text}</p>
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
  const res = await fetch("http://localhost:8080/api/meta");
  const novels = await res.json();

  // Get the paths we want to pre-render based on novels
  // const paths = novels.flatMap((novel: Novel) => {
  //   return novel.pages.reduce((acc, _, index): any => {
  //     return [
  //       ...acc,
  //       { params: { id: novel.id, page: (index + 1).toString() } },
  //     ];
  //   }, []);
  // });

  const paths = novels.flatMap((novel: NovelMeta) => {
    let result = [];
    let count = 1;
    while (count <= novel.page_count) {
      result.push({
        params: { id: novel.id.toString(), page: count.toString() },
      });
      count++;
    }

    return result;
    // console.log(novel.id);
    // return [{ params: { id: novel.id.toString(), page: "1" } }];
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
  console.log({ params });
  const res_novel = await fetch(
    `http://localhost:8080/api/v1/${params.id}/page/${params.page}`
  );
  const novel = await res_novel.json();
  const res = await fetch(
    `http://localhost:8080/api/${params.id}/page/${params.page}`
  );
  const text = await res.json();

  // Pass page data to the page via props
  return {
    props: { text, novel, id: params.id, pageNumber: params.page },
  };
}
