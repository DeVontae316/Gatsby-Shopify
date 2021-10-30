import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    > div:first-child {
      order: 2;
    }
    > div:last-child {
      order: 1;
    }
  }
`;

export const SelectWrapper = styled.div`
  > strong {
    display: block;
    margin-bottom: 8px;
  }
`;

export const Price = styled.div`
  margin: 40px 0px;
  font-weight: bold;
  font-style: 30px;
`;
