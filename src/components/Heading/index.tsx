import * as Styled from './styled';

export type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
