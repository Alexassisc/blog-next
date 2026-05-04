import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPostBySlug } from '@/data/posts/get-post-by-slug';
import { PostContainer } from '@/containers/Post';
import { notFound } from 'next/navigation';
import { Post } from '@/domain/posts/types';
import { SITE_NAME } from '@/config/app-config';
import { removeHtml } from '@/utils/remove-html';

export const dynamicParams = true;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

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

    return posts
      .filter((post: Post) => {
        const hasSlug =
          post.slug && typeof post.slug === 'string' && post.slug.trim() !== '';
        return hasSlug && post.slug !== 'undefined';
      })
      .map((post: Post) => ({
        slug: post.slug,
      }));
  } catch (error) {
    console.error('Erro ao gerar parâmetros estáticos:', error);
    return [];
  }
}

export default async function DynamicPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug || slug === 'undefined' || slug === 'null') {
    notFound();
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <PostContainer post={post} />;
}
