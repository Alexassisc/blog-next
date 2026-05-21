import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacings.medium} 0;
  padding: 0 ${({ theme }) => theme.spacings.small};
`;

const BaseButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem ${({ theme }) => theme.spacings.small};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const PreviousLink = styled(BaseButton)``;

export const NextLink = styled(BaseButton)`
  margin-left: auto;
`;
