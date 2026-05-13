import { StyledProvider } from '@/providers/StyledProvider';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { Footer } from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <StyledProvider>
          <Header />
          <MainContainer>{children} </MainContainer>
          <Footer />
        </StyledProvider>
      </body>
    </html>
  );
}
