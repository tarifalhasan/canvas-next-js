import { logo } from '../../assets/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
