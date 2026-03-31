import Link from 'next/link';
import { SITE_NAME } from '@/config/app-config';
import * as Styled from './styled';
export const Header = () => {
  return (
    <Styled.Container>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        {SITE_NAME}
      </Link>
    </Styled.Container>
  );
};
