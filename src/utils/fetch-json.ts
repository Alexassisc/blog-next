export const fetchJson = async <T>(
  url: string,
  revalidateTime = 600,
): Promise<T> => {
  try {
    const res = await fetch(url, {
      next: { revalidate: revalidateTime },
    });

    if (!res.ok) throw new Error(`Erro ${res.status}`);

    return await res.json();
  } catch (error) {
    console.error(`Falha ao buscar dados na URL: ${url}`, error);

    throw error;
  }
};
