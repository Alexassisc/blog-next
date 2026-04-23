import HomePage from '@/containers/HomePage';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Publicações de conteúdos',
};

export default async function Home() {
  const [posts, total] = await Promise.all([getAllPosts(), countAllPosts()]);

  return (
    <>
      <HomePage posts={posts} total={total} />
    </>
  );
}
