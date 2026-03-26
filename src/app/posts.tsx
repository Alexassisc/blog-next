// app/Posts.tsx
'use client';

import { Post } from '@/domain/posts/types';

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}
