import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 30;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 4rem;
  padding-top: 20rem;
`;

export const InnerContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalBackground = styled.div`
  position: absolute;
  inset: 0;
  background-color: gray;
`;

export const ModalHeader = styled.div`
  width: auto;
  z-index: 50;
  padding-top: 1rem;
  overflow-y: auto;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
  position: relative;
  margin: 0 auto;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 4rem;
    div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        font-size: 1rem;
        line-height: 1.5rem;

        font-weight: 500;

        color: #4b5563;
      }
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;
  height: 100%;
  padding: 4rem;
  border: 1px solid #e5e7eb;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 3rem 4rem;
  margin-top: 6rem;
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
