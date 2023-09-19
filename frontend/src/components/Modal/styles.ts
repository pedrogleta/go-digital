import styled from "styled-components";

// export const Container = styled.div`
//   position: fixed;
//   z-index: 1;
//   left: 0;
//   top: 0;
//   width: 100vw;
//   height: 100vh;
// `;

// export const ModalContent = styled.div`
//   background-color: #fefefe;
//   margin: 15% auto;
//   padding: 20px;
//   border: 1px solid #888;
//   width: 80%;
// `;

// export const ModalHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const ModalTitle = styled.h2`
//   margin: 0;
// `;

// export const CloseButton = styled.span`
//   color: #aaa;
//   font-size: 28px;
//   font-weight: bold;
//   cursor: pointer;
// `;

// export const ModalBody = styled.div`
//   margin-top: 20px;
// `;

// export const ModalFooter = styled.div`
//   margin-top: 20px;
//   display: flex;
//   justify-content: flex-end;
// `;

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
