import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acerca de nosotros",
  description: "Página de referencia sobre nosotros",
  keywords: ["About page", "acerca de nosotros", "información"]
}

const AboutPage = () => {
  return (
    <span className='text-7xl'>About page</span>
  )
}

export default AboutPage

