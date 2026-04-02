import { POST_URL } from '@/config/app-config';
import { fetchJson } from '@/utils/fetch-json';

interface CountResponse {
  meta: {
    pagination: {
      total: number;
    };
  };
}

export async function countAllPosts(): Promise<number> {
  const url = `${POST_URL}?pagination[pageSize]=1`;
  const json = await fetchJson<CountResponse>(url);

  return json.meta.pagination.total;
}
