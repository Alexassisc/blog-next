import { HtmlContent } from '@/components/htmlcontent';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPostBySlug } from '@/data/posts/get-post-by-slug';
import { Post } from '@/domain/posts/types';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function DynamicPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getPostBySlug(slug);

  const post = Array.isArray(posts) ? posts[0] : posts;

  if (!post) return <p>Post não encontrado.</p>;

  return (
    <article>
      <h1>{post.title}</h1>

      {post.cover?.url && (
        <img
          src={post.cover.url}
          alt={post.title}
          style={{ width: '100%', borderRadius: '8px', marginBottom: '2rem' }}
        />
      )}

      <HtmlContent content={post.content} />
    </article>
  );
}
