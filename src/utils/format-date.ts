export const formatDate = (date: string): string => {
  if (!date) return 'Data indisponível';

  const dateObj = new Date(date);

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(dateObj);
};
