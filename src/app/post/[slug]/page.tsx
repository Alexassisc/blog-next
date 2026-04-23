// src/app/post/[slug]/page.tsx
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPostBySlug } from '@/data/posts/get-post-by-slug';
import { PostContainer } from '@/containers/Post';
import { notFound } from 'next/navigation';
import { Post } from '@/domain/posts/types';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const slug = params.slug;
  const posts = await getPostBySlug(slug);
  const post = Array.isArray(posts) ? posts[0] : posts;

  return {
    title: post?.title || 'Post não encontrado',
    description: 'Leia este conteúdo incrível no meu blog',
  };
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post: Post) => ({ slug: post.slug }));
  } catch (error) {
    console.error('Erro ao gerar rotas estáticas:', error);
    return [];
  }
}

export default async function DynamicPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getPostBySlug(slug);
  const post = Array.isArray(posts) ? posts[0] : posts;

  if (!post) notFound();

  return <PostContainer post={post} />;
}
