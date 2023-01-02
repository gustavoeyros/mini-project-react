import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;

  & div {
    display: flex;
    width: 12px;
    height: 12px;
    border: 1px solid black;
    border-radius: 50%;
  }
`;
