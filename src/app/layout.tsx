import { StyledProvider } from '@/providers/StyledProvider';
import { Header } from '@/components/Header';
import { GlobalStyles } from '@/styles/global-styles';
import { MainContainer } from '@/components/MainContainer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledProvider>
          <GlobalStyles />
          <Header />
          <MainContainer>{children}</MainContainer>
        </StyledProvider>
      </body>
    </html>
  );
}
