import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Página de contacto",
  keywords: "Contacto"
}

const ContactPage = () => {
  return (
    <span className='text-7xl'>Contact Page</span>
  )
}

export default ContactPage