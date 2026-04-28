export const removeHtml = (html: string): string => {
  if (!html) return '';
  return html
    .replace(/<[^>]*>?/gm, '') // Remove tags HTML
    .replace(/#{1,6}\s/g, '') // Remove títulos Markdown (#)
    .replace(/\*\*/g, '') // Remove negrito Markdown
    .replace(/__/g, '') // Remove negrito Markdown
    .replace(/\*/g, '') // Remove itálico Markdown
    .replace(/&nbsp;/g, ' ') // Remove espaços codificados
    .trim();
};
