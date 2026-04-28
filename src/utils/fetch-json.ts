export const fetchJson = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) throw new Error(`Erro ${res.status}`);

    return await res.json();
  } catch (error) {
    console.error('Falha ao buscar:', error);

    return { data: [] } as unknown as T;
  }
};
