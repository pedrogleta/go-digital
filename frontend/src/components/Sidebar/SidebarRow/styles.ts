import styled from "styled-components";

export const Container = styled.div`
  width: 8vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  border-radius: 8px;
  padding-left: 8px;
  font-weight: bold;
  margin-bottom: 10px;

  p {
    margin-left: 8px;
  }

  &:hover {
    background-color: #c080c0;
    cursor: pointer;

    transition: 0.2s ease-in-out;
  }
`;
