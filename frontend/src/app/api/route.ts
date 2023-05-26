import { NextResponse } from 'next/server';

interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  {
    id: 1,
    name: 'Luke Skywalker',
  },
];

export async function GET(request: Request) {
  return NextResponse.json(people);
}
