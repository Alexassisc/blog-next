import { cache } from 'react';
import { POST_URL } from '@/config/app-config';
import { Post } from '@/domain/posts/types';
import { fetchJson } from '@/utils/fetch-json';

export const getPostById = cache(
  async (id: string | number): Promise<Post | null> => {
    const url = `${POST_URL}?filters[id][$eq]=${id}&populate[author][populate]=*&populate[category][populate]=*&populate[cover][populate]=*`;

    try {
      const json = await fetchJson<{ data: Post[] | Post }>(url);
      if (!json || !json.data) return null;

      if (Array.isArray(json.data)) {
        return json.data.length > 0 ? json.data[0] : null;
      }

      return json.data;
    } catch (error) {
      console.error('Erro ao buscar o post por ID:', error);
      return null;
    }
  },
);
