import Image from "next/image";
import Header from "./components/header";
import Snippets from "./components/snippets/intex";
import Features from "./components/features";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Snippets />
        <Features />
      </main>
    </>
  )
}
