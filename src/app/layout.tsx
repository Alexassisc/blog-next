import { StyledProvider } from '@/providers/StyledProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledProvider>{children}</StyledProvider>
      </body>
    </html>
  );
}
