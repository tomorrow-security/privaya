import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from "../components/atoms/Container"

const Card = ({ image, name, description }) => (
  <div className="flex flex-col items-center text-center space-y-4">
    <img
      className="rounded-full border-2 border-green-600"
      src={image}
      alt=""
    />
    <h2 className="text-xl uppercase">{name}</h2>
    <p>{description}</p>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="L'équipe" />
    <div className="py-8">
      <Container>
        <h1 className="mb-8 text-center text-3xl md:text-5xl uppercase">
          Les fondateurs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            image="https://res.cloudinary.com/privaya/image/upload/c_scale,h_200,w_200,f_auto,q_auto:low/v1574858177/public/VA_xqvcea"
            name="Valérian Castel"
            description="Valérian s'occupe de la gestion administrative et supervise le business development ainsi que le marketing de la société."
          />
          <Card
            image="https://res.cloudinary.com/privaya/image/upload/c_scale,h_200,w_200,f_auto,q_auto:low/v1574758894/public/BR_gcgoe7"
            name="Brice Aïello"
            description="Brice supervise la technique et le produit. Il est le garant de la sécurité des systèmes d'information et de la protection des données personnelles des utilisateurs."
          />
        </div>
      </Container>
    </div>
  </Layout>
)

export default IndexPage
