import styled from "styled-components";

export const Table = styled.table`
  width: 95%;
  border-collapse: collapse;
  border: 1px solid #000;
`;

export const TableHead = styled.thead`
  background-color: #d5ead5;
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const TableHeader = styled.th`
  border: 1px solid #000;
  padding: 5px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #d5ead5;
  }
`;
