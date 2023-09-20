import { DashboardIcon } from "../icons/DashboardIcon";
import { ItemsIcon } from "../icons/ItemsIcon";
import { TransactionsIcon } from "../icons/TransactionsIcon";
import { SidebarRow } from "./SidebarRow";
import { Container } from "./styles";

export const Sidebar = () => (
  <Container>
    <SidebarRow route="/transactions" icon={<TransactionsIcon />}>
      Transactions
    </SidebarRow>
    <SidebarRow route="/dashboard" icon={<DashboardIcon />}>
      Dashboard
    </SidebarRow>
    <SidebarRow route="/items" icon={<ItemsIcon />}>
      Items
    </SidebarRow>
  </Container>
);
