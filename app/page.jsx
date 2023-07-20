'use client';

import { Button } from '@material-tailwind/react';
import Link from 'next/link';

export default function Home() {
  return (
    <Button>
      <Link href={'products'}>Go to Product Page</Link>
    </Button>
  );
}
