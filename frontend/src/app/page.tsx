import { TransactionsIcon } from '@/components/icons/TransactionsIcon';

export default function Home() {
  return (
    <div>
      <div className="h-8 flex ">Header</div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <TransactionsIcon /> Transactions
          </div>
        </div>
        <div className="ml-4">Main Section</div>
      </div>
    </div>
  );
}
