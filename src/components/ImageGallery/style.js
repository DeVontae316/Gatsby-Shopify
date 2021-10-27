import styled from "styled-components";

export const Gallery = styled.div`
  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #dcdcdc;
  }
  > div:last-child {
    margin-top: 5px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;

    //tablet
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    //desktop
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
