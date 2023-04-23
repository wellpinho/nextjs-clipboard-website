import Image from "next/image";
import Header from "./components/header";
import Snippets from "./components/snippets/intex";
import Features from "./components/features";
import Anywhere from "./components/anywhere";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Snippets />
        <Features />
        <Anywhere />
      </main>
    </>
  )
}
