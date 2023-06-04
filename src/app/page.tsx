import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <ul>
          <li>
            <Link href="/dashboard">
              <button type="button"> To Dashboard</button>
            </Link>
          </li>
          <li>
            <Link href="/orders/1234">
              <button type="button"> To Orders</button>
            </Link>
          </li>
          <li>Nav 1</li>
        </ul>
      </div>
      <h1>{'Austin\'s Blog'}</h1>
    </main>
  );
}
