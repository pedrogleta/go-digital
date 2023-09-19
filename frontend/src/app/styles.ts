import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const SidebarContainer = styled.div`
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;
