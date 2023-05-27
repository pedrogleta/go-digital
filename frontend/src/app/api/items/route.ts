import { IAPIItem } from '@/types/items';
import { NextResponse } from 'next/server';

const items: IAPIItem[] = [
  {
    id: 1,
    name: 'Banana',
    price: 1.99,
    quantity: 150,
  },
  {
    id: 2,
    name: 'Melão',
    price: 19.99,
    quantity: 876,
  },
];

export async function GET(request: Request) {
  return NextResponse.json(items);
}
