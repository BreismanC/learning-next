import { redirect } from "next/navigation";
import Link from "next/link";

export default function HomePage() {

  redirect("dashboard/counter");
  //^Al usar redirect retorna never, lo que significa que las siguientes líneas de código ya no se ejecutan.
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Página principal</span>
      <Link className="text-lg mt-2" href="/about">About</Link>
    </main>
  );
}
