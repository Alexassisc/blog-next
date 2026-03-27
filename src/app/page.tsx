import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';

export default async function Home() {
  const posts = await getAllPosts();

  return <HomePage posts={posts}></HomePage>;
}
