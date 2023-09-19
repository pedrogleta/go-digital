import { DashboardIcon } from "./icons/DashboardIcon";
import { ItemsIcon } from "./icons/ItemsIcon";
import { TransactionsIcon } from "./icons/TransactionsIcon";

export const Sidebar = () => (
  <div className="flex flex-col">
    <div>
      <TransactionsIcon /> <p className="ml-2">Transações</p>
    </div>
    <div>
      <DashboardIcon /> <p className="ml-2">Dashboard</p>
    </div>
    <div>
      <ItemsIcon /> <p className="ml-2">Itens</p>
    </div>
  </div>
);
