import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { react as HomeContent } from "../content/home.md";
import testList from "../content/testimonials.json";

export default function Home() {
  const tests = testList.testsList;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/pos-systems">POS Systems</Link>
      <h1>test</h1>
      <h3>
        <HomeContent />
      </h3>
      <>
        <h4>Testimonials</h4>
        {tests.map(({ client, testimonial }, i) => (
          <div key={i} style={{ paddingBottom: "10px" }}>
            <p>{client}</p>
            <p>{testimonial}</p>
          </div>
        ))}
      </>
    </div>
  );
}
