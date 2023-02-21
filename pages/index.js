import Head from 'next/head'
import Image from 'next/image'
import { Inter, Recursive } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/airplanecrash.json'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>History of planecrash after 2009</title>
        <meta name="description" content="A list of airplane crashes after 2009" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.welcomepage}>
        <h1>History of planecrash after 2009</h1>
        <Link href="/planecrash">
          <button>See More</button>
        </Link>
      </div>
    </>
  );
}
