// src/app/page.tsx
import HomePage from '@/containers/HomePage';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PaginationData } from '@/domain/posts/types';
import { Metadata } from 'next';

export const revalidate = 600;

export const metadata: Metadata = {
  title: 'Blog - Página 1',
  description: 'Publicações de conteúdos',
};

export default async function Home() {
  const page = 1;
  const category = '';
  const postsPerPage = 2;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const paginationQuery = `pagination[page]=${page}&pagination[pageSize]=${postsPerPage}&pagination[withCount]=true`;
  const urlQuery = `sort[0]=id:desc&${paginationQuery}`;

  const [posts, totalStr] = await Promise.all([
    getAllPosts(urlQuery),
    countAllPosts(''),
  ]);

  const total = Number(totalStr);

  const pagination: PaginationData = {
    nextPage,
    numberOfPosts: total,
    postsPerPage,
    previousPage,
    category,
  };

  return <HomePage posts={posts} total={total} pagination={pagination} />;
}
