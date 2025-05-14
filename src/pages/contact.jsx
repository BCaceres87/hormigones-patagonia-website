import Layout from '../components/layout'

const Contact = () => {
  return (
   <Layout>
     <section>
      <span>
        Cotiza con nosotros
      </span>
      <h2>
        Contáctanos
      </h2>
      <p>Estamos aquí para ayudarte</p>
      <span>hello@Hormigonespatagonia.cl</span>
      <span>+56 9 1234 5678</span>
      <span>123 Calle Ejemplo, Santiago, Chile</span>
      <ContactForm/>
     </section>
   </Layout>
  )
}

export default Contact
