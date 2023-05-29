import { DashboardIcon } from "./icons/DashboardIcon";
import { ItemsIcon } from "./icons/ItemsIcon";
import { TransactionsIcon } from "./icons/TransactionsIcon";

export const Sidebar = () => (
  <div className="flex flex-col">
    <div className="flex flex-row border border-indigo-500 rounded px-6 py-2">
      <TransactionsIcon /> <p className="ml-2">Transactions</p>
    </div>
    <div className="flex flex-row border border-indigo-500 rounded px-6 py-2 mt-3">
      <DashboardIcon /> <p className="ml-2">Dashboard</p>
    </div>
    <div className="flex flex-row border border-indigo-500 rounded px-6 py-2 mt-3">
      <ItemsIcon /> <p className="ml-2">Itens</p>
    </div>
  </div>
);
