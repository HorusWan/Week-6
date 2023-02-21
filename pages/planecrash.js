import Head from 'next/head'
import Image from 'next/image'
import { Inter, Recursive } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/airplanecrash.json'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  // const [records, setRecords] = useState([]);
  // useEffect(() => {
  //   async function fetchAirplaneCrashData() {
  //     const response = await fetch('/data/airplanecrash.json');
  //     const data = await response.json();
  //     setRecords(data);
  //   }
  //   fetchAirplaneCrashData();
  // }, []);
  
  return (
    <>
      <Head>
        <title>Airplane Crashes</title>
        <meta name="description" content="A list of airplane crashes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Airplane Crashes</h1>
        <p>A list of airplane crashes after 2009 and their details</p>
      </header>
      <main className={styles.main}>
        <div className={styles.recordContainer}>
          {record.map((rec, index) => {
            return (
              <div key={index} className={styles.record}>
                <h2 className={styles.recordTitle}>Date</h2>
                <p>{rec["Date"]}</p>
                <h2 className={styles.recordTitle}>Location</h2>
                <p>{rec["Location"]}</p>
                <h2 className={styles.recordTitle}>Operator</h2>
                <p>{rec["Operator"]}</p>
                <h2 className={styles.recordTitle}>Route</h2>
                <p>{rec["Route"]}</p>
                <h2 className={styles.recordTitle}>Type</h2>
                <p>{rec["Type"]}</p>
                <h2 className={styles.recordTitle}>Summary</h2>
                <p>{rec["Summary"]}</p>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}