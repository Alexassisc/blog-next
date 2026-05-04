import { PostCard } from '@/components/PostCard';
import { POST_URL } from '@/config/app-config';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostsResponse } from '@/domain/posts/types';
import { fetchJson } from '@/utils/fetch-json';
import * as Styled from '@/containers/HomePage/styles';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  const slugs = posts
    .map((post) => post.category?.slug)
    .filter((slug): slug is string => !!slug);

  const uniqueSlugs = Array.from(new Set(slugs));

  return uniqueSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function CategoryPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const url = `${POST_URL}?filters[category][slug][$eq]=${slug}&populate=*`;

  const response = await fetchJson<PostsResponse>(url);
  const posts = response.data;

  const categoryName = posts.length > 0 ? posts[0].category?.name : 'Categoria';

  return (
    <Styled.Container>
      
      <Styled.Category>
        Categoria: {categoryName}
      </Styled.Category>

      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              slug={post.slug}
              cover={post.cover?.formats?.small?.url || post.cover?.url || ''}
            />
          ))}
        </>
      ) : (
        <p>Nenhum post encontrado para esta categoria.</p>
      )}
    </Styled.Container>
  );
}
