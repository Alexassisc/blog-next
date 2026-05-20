import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPostById } from '@/data/posts/get-post-by-id'; // Puxando a nova função
import { PostContainer } from '@/containers/Post';
import { notFound } from 'next/navigation';
import { Post } from '@/domain/posts/types';
import { SITE_NAME } from '@/config/app-config';
import { removeHtml } from '@/utils/remove-html';

export const dynamicParams = true;
export const revalidate = 600;

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(props: PageProps) {
  const { id } = await props.params;
  const post = await getPostById(id);

  return {
    title: post?.title
      ? `${post.title} - ${SITE_NAME}`
      : `Post não encontrado - ${SITE_NAME}`,

    description: post
      ? (() => {
          const cleanContent = removeHtml(post.content)
            .replace(/#/g, '')
            .trim();

          const shortDescription = cleanContent.substring(0, 120);

          return `${shortDescription}... Leia mais sobre: ${post.title}`;
        })()
      : 'Bem-vindo ao meu blog.',
  };
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();

    if (!Array.isArray(posts)) return [];

    return posts.map((post: Post) => ({
      id: String(post.id),
    }));
  } catch (error) {
    console.error('Erro ao gerar parâmetros estáticos:', error);
    return [];
  }
}

export default async function DynamicPost({ params }: PageProps) {
  const { id } = await params;

  if (!id || id === 'undefined' || id === 'null') {
    notFound();
  }

  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return <PostContainer post={post} />;
}
