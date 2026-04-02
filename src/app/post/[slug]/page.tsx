// src/app/post/[slug]/page.tsx
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPostBySlug } from '@/data/posts/get-post-by-slug';
import { PostContainer } from '@/containers/HomePage/Post';
import { notFound } from 'next/navigation';
import { Post } from '@/domain/posts/types';

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
