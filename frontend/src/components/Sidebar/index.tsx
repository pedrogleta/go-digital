import { DashboardIcon } from "../icons/DashboardIcon";
import { ItemsIcon } from "../icons/ItemsIcon";
import { TransactionsIcon } from "../icons/TransactionsIcon";
import { SidebarRow } from "./SidebarRow";
import { Container } from "./styles";

export const Sidebar = () => (
  <Container>
    <SidebarRow icon={<TransactionsIcon />}>Transactions</SidebarRow>
    <SidebarRow icon={<DashboardIcon />}>Dashboard</SidebarRow>
    <SidebarRow icon={<ItemsIcon />}>Items</SidebarRow>
  </Container>
);
