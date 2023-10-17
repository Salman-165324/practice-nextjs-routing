import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2 className="headingText">Home Page</h2>
      <section className="container mx-auto">
        <h3 className="headingText">All the products</h3>
        <ul className="mt-10 list-none flex-col gap-10">
          <li className="p-4 border-2 rounded-md w-fit mx-auto">
            <Link href={"/products/1"}>Product1</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
