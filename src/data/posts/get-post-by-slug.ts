import { cache } from 'react';
import { POST_URL } from '@/config/app-config';
import { Post } from '@/domain/posts/types';
import { fetchJson } from '@/utils/fetch-json';

export const getPostBySlug = cache(
  async (slug: string): Promise<Post | null> => {
    const url = `${POST_URL}?filters[slug][$eq]=${slug}&populate=*`;
    const json = await fetchJson<{ data: Post[] }>(url);

    return Array.isArray(json.data) ? json.data[0] : null;
  },
);
