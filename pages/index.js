import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { react as HomeContent } from "../content/home.md";
//import { attributes as testimonials } from "../content/testimonials";

export default function Home() {
  console.log(JSON.stringify(HomeContent));
  console.log(HomeContent);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/pos-systems">POS Systems</Link>
      <h1 style={{ color: "red" }}>test</h1>
      <p style={{ color: "red" }}>
        <HomeContent />
      </p>
    </div>
  );
}
