import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
`;

export const Table = styled.table`
  width: 100%;
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

export const Button = styled.button`
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px;
  margin-top: 10px;

  cursor: pointer;

  &:hover {
    background-color: #d5ead5;
  }
  font-weight: bold;
`;
