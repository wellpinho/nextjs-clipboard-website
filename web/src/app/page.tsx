import Image from "next/image";
import Header from "./components/header";
import Snippets from "./components/snippets/intex";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Snippets />
      </main>
    </>
  )
}
