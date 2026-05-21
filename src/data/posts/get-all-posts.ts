import { POST_URL } from '@/config/app-config';
import { Post } from '@/domain/posts/types';
import { fetchJson } from '@/utils/fetch-json';

export async function getAllPosts(query = ''): Promise<Post[]> {
  let baseUrl = `${POST_URL}?populate[author][populate]=*&populate[category][populate]=*&populate[cover][populate]=*`;

  if (query) {
    baseUrl += `&${query}`;
  } else {
    baseUrl += `&sort[0]=id:desc&pagination[pageSize]=30`;
  }

  try {
    const json = await fetchJson<{ data: Post[] }>(baseUrl);

    if (json && Array.isArray(json.data)) {
      return json.data;
    }

    return [];
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
}
