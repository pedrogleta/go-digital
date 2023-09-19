import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CloseButton = styled.span`
  width: fit-content;
  margin-left: auto;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #1a1a1a;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background-color: #ccc;
  cursor: pointer;
  &:hover {
    background-color: #bbb;
  }
`;
