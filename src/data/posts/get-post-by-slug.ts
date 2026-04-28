import { POST_URL } from '@/config/app-config';
import { Post } from '@/domain/posts/types';
import { fetchJson } from '@/utils/fetch-json';

export async function getPostBySlug(slug: string | string[]): Promise<Post[]> {
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const url = `${POST_URL}?filters[slug][$eq]=${slugString}&populate=*`;

  const json = await fetchJson<{ data: Post[] }>(url);

  return json.data;
}
