import styled from "styled-components";

export const ImageWrapper = styled.section`
  cursor: pointer;
  border: 1px solid ${(props) => (props.color ? "blue" : "#dcdcdc")};
`;
