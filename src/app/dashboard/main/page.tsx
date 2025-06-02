import { WidgetsGrid } from "@/components"

export const metadata = {
    title: "Dashboard",
    description: "Pagina de dashboard"
}

export default function MainPage() {
  return (
    <main className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <h2 className="mt-2 text-xl">Información general</h2>
      <WidgetsGrid />
    </main>
  )
}