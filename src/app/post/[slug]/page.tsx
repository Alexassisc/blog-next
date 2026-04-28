import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPostBySlug } from '@/data/posts/get-post-by-slug';
import { PostContainer } from '@/containers/Post';
import { notFound } from 'next/navigation';
import { Post } from '@/domain/posts/types';
import { SITE_NAME } from '@/config/app-config';
import { removeHtml } from '@/utils/remove-html';

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
  const posts = await getAllPosts();

  return posts.map((post: Post) => ({ slug: post.slug }));
}

export default async function DynamicPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return <PostContainer post={post} />;
}
