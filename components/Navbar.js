import React from 'react';
import Link from '../Link';
import { useRouter } from 'next/router';

const links = ['art', 'home'];
export default function Navbar() {
  const router = useRouter();

  return (
    <header>
      <div>
        <Link href="/">Nicholas Lopez</Link>

        {pages.map((link, i) => (
          <Link key={link + i} href={`/${link}`}>
            {link}
          </Link>
        ))}
      </div>
    </header>
  );
}
