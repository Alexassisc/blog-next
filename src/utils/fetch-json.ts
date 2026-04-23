export const fetchJson = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(url, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Erro ${res.status} ao buscar dados de ${url}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`Falha crítica ao buscar dados: ${url}`, error);

    return { data: [] } as unknown as T;
  }
};
