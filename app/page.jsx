import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Link href={'products'}>Go to Product Page</Link>
    </Layout>
  );
}
