import { useRouter } from "next/navigation";
import { Container } from "./styles";

export interface SidebarRowProps {
  route: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

export const SidebarRow = (props: SidebarRowProps) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(props.route)}>
      {props.icon} <p>{props.children}</p>
    </Container>
  );
};
