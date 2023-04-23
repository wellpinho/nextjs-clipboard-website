import Image from "next/image";
import Header from "./components/header";
import Snippets from "./components/snippets/intex";
import Features from "./components/features";
import Anywhere from "./components/anywhere";
import Supercharge from "./components/supercharge";
import References from "./components/references";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Snippets />
        <Features />
        <Anywhere />
        <Supercharge />
        <References />
      </main>
    </>
  )
}
