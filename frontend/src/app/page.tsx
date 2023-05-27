import { DashboardIcon } from '@/components/icons/DashboardIcon';
import { ItemsIcon } from '@/components/icons/ItemsIcon';
import { TransactionsIcon } from '@/components/icons/TransactionsIcon';

export default function Home() {
  return (
    <div>
      <div className="h-16 flex ">Header</div>
      <div className="flex flex-row ml-3">
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
        <div className="ml-4">Main Section</div>
      </div>
    </div>
  );
}
