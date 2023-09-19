import styled from "styled-components";

export const colors = {
  primary: "#d5aad5",
  secondary: "#ead5ea",
  tertiary: "#f5ead5",
  quaternary: "#f5d5ea",
  quinary: "#ead5f5",
  senary: "#d5ead5",
};

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const SidebarContainer = styled.div`
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;
