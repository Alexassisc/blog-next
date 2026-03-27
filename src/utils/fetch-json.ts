export const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Erro ao buscas dados de ${url}`);
  }

  return await res.json();
};
