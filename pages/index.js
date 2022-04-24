import Head from "next/head";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hashira</title>
      </Head>
      <div className="">
        <HomePage />
      </div>
    </div>
  );
}
