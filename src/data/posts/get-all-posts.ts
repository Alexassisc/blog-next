import { POST_URL } from '@/config/app-config';
import { Post } from '@/domain/posts/types';
import { fetchJson } from '@/utils/fetch-json';

export async function getAllPosts(): Promise<Post[]> {
  const url = `${POST_URL}?populate=*&sort[0]=id:desc&pagination[pageSize]=30`;

  try {
    const json = await fetchJson<{ data: Post[] }>(url);

    if (json && Array.isArray(json.data)) {
      return json.data;
    }

    return [];
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
}
