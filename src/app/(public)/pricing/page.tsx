import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Página de precios",
  description: "Descripción de la página",
  keywords: ["Precios", "pricing", "..."]
}

const PricinpgPage = () => {
  return (
    <span className='text-7xl'>Pricinpg Page</span>
  )
}

export default PricinpgPage