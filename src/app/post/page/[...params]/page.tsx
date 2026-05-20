import HomePage from '@/containers/HomePage';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData, PaginationData } from '@/domain/posts/types';

type PageProps = {
  params: Promise<{
    params: string[];
  }>;
};

export default async function Page({ params }: PageProps) {
  const resolveParams = await params;

  const page = Number(resolveParams.params[0] || 1);
  const category = resolveParams.params[1] || '';
  console.log(page, category);

  const postsPerPage = 6;
  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category
    ? `filters[category][slug][$contains]=${category}`
    : '';
  const urlQuery = `sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${postsPerPage}${categoryQuery ? `&${categoryQuery}` : ''}`;

  const posts: PostData[] = await getAllPosts(urlQuery);
  const numberOfPosts = Number(
    await countAllPosts(categoryQuery ? `&${categoryQuery}` : ''),
  );

  if (!posts.length) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Página não encontrada...</h2>
      </div>
    );
  }

  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category,
  };

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}
