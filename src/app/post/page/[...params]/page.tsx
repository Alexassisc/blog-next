import HomePage from '@/containers/HomePage';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData, PaginationData } from '@/domain/posts/types';
import { Metadata } from 'next';

type PageProps = {
  params: Promise<{
    params: string[];
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolveParams = await params;
  const page = resolveParams.params[0] || '1';
  const category = resolveParams.params[1] || '';

  const formattedCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : '';

  const titleChunk = formattedCategory ? `${formattedCategory} - ` : '';

  return {
    title: `${titleChunk}Meu Blog com Strapi - Página ${page}`,
  };
}

export default async function Page({ params }: PageProps) {
  const resolveParams = await params;

  const page = Number(resolveParams.params[0] || 1);
  const category = resolveParams.params[1] || '';

  const postsPerPage = 2;
  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category
    ? `filters[category][slug][$contains]=${category}`
    : '';

  const paginationQuery = `pagination[page]=${page}&pagination[pageSize]=${postsPerPage}&pagination[withCount]=true`;
  const urlQuery = `sort[0]=id:desc&${paginationQuery}${categoryQuery ? `&${categoryQuery}` : ''}`;
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
