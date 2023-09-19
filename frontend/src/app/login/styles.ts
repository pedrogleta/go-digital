import styled from "styled-components";
import { colors } from "@/app/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${colors.quaternary};
`;

export const Card = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 5px;
  border: 2px solid ${colors.primary};
  background-color: ${colors.tertiary};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin-top: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${colors.primary};
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
  background-color: ${colors.secondary};
  &:hover {
    background-color: ${colors.primary};
    transition: 0.5s;
  }
`;

export const Heading = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;
