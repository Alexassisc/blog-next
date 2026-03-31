import { POST_URL } from '@/config/app-config';
import { Post } from '@/domain/posts/types';
import { fetchJson } from '@/utils/fetch-json';

export async function getAllPosts(): Promise<Post[]> {
  const url = `${POST_URL}?populate=*&sort[0]=id:desc&pagination[pageSize]=30`;

  const json = await fetchJson<{ data: Post[] }>(url);

  return json.data ? json.data : [];
}
