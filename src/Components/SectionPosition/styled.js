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

export const ColorSection = styled.div`
  ${(props) =>
    props.positionColor === 1
      ? "&:first-child{background: #92E3A9;; border: none};"
      : ""}

  ${(props) =>
    props.positionColor === 2
      ? "&:nth-child(2) {background: #92E3A9;; border: none"
      : ""}
   ${(props) =>
    props.positionColor === 3
      ? "&:last-child {background: #92E3A9;; border: none"
      : ""}
`;
