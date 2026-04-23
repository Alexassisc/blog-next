import { POST_URL } from '@/config/app-config';
import { Post } from '@/domain/posts/types';
import { fetchJson } from '@/utils/fetch-json';

export async function getAllPosts(): Promise<Post[]> {
  const url = `${POST_URL}?populate=*&sort[0]=id:desc&pagination[pageSize]=30`;

  try {
    console.log(`Buscando posts em: ${url}`);

    const json = await fetchJson<{ data: Post[] }>(url);


    return json.data || [];
  } catch (error) {

    console.error('Erro ao buscar posts:', error);
    return [];
  }
}
