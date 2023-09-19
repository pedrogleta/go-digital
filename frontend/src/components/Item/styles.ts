import styled from "styled-components";

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #d5ead5;
  }
`;

export const TableData = styled.td`
  border: 1px solid #000;
  padding: 5px;

  &:last-child {
    text-align: center;
  }
`;
