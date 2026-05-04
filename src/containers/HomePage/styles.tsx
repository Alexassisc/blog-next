import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  span {
    grid-column: 1 / -1;
    font-size: 0.85rem;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
`;

export const Category = styled.div`
  text-align: center;

  font-family: 'Times New Roman', Times, serif;

  grid-column: 1 / -1;
  font-size: ${({ theme }) => theme?.font?.sizes?.large || '2rem'};
  padding: ${({ theme }) => theme?.spacings?.medium || '2rem'} 0;
  color: ${({ theme }) => theme?.colors?.text || '#000000'};

  font-weight: bold;
`;
