import { Post } from '@/domain/posts/types';

async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    'https://blog-strapi-api-bw1p.onrender.com/api/posts?populate=*',
    { next: { revalidate: 60 } },
  );

  const json = await res.json();

  return json.data ? json.data : json;
}

import Posts from './posts';

export default async function Home() {
  const posts = await getPosts();

  return <Posts posts={posts} />;
}
