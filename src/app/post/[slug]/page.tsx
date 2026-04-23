// src/app/post/[slug]/page.tsx
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPostBySlug } from '@/data/posts/get-post-by-slug';
import { PostContainer } from '@/containers/Post';
import { notFound } from 'next/navigation';
import { Post } from '@/domain/posts/types';

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const posts = await getPostBySlug(slug);
  const post = Array.isArray(posts) ? posts[0] : posts;

  return {
    title: post?.title || 'Post não encontrado',

    description: post?.title
      ? `Leia mais sobre: ${post.title}`
      : 'Bem-vindo ao meu blog.',
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post: Post) => ({ slug: post.slug }));
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
