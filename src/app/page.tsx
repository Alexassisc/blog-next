import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Publicações de conteúdos',
};

export default async function Home() {
  const posts = await getAllPosts();

  return <HomePage posts={posts}></HomePage>;
}
