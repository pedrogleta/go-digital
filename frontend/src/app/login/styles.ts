import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: 16px;
  color: #333;
  outline: none;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: 16px;
  color: #333;
  outline: none;
  cursor: pointer;
  background-color: #ccc;
  &:hover {
    background-color: #999;
  }
`;

export const Heading = styled.div`
  font-size: 30px;
  color: #333;
  margin-bottom: 20px;
`;
