import { Container } from "./styles";

export interface SidebarRowProps {
  icon: React.ReactNode;
  children?: React.ReactNode;
}

export const SidebarRow = (props: SidebarRowProps) => {
  return (
    <Container>
      {props.icon} <p>{props.children}</p>
    </Container>
  );
};
