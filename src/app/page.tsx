import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Página principal</span>
      <Link className="text-lg mt-2" href="/about">About</Link>
    </main>
  );
}
