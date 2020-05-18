import React from "react"

import Container from "../atoms/Container"

const Card = ({ image, title, description }) => (
  <div className="flex flex-col items-center p-4 bg-white shadow-xl">
    <img src={image} alt={title} />
    <h3 className="text-center text-xl">{title}</h3>
    <p className="text-center text-sm text-gray-600 text-light">
      {description}
    </p>
  </div>
)

export default () => (
  <div className="py-8 bg-gray-100">
    <Container>
      <div className="space-y-4">
        <h2 className="text-center text-2xl md:text-4xl leading-none">
          Pourquoi Privaya ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            image="https://res.cloudinary.com/privaya/image/upload/w_100,h_100,f_auto,q_auto:low/v1578862016/public/no-2_d3fnth.svg"
            title="C'est gratuit"
            description="Pas de frais cachés. Et on ne revends pas vos données."
          />
          <Card
            image="https://res.cloudinary.com/privaya/image/upload/w_100,h_100,f_auto,q_auto:low/v1578862017/public/shield_v5vn6y.svg"
            title="Protégez-vous"
            description="On protège votre identité et votre vie privée grâce aux dernières technologies."
          />
          <Card
            image="https://res.cloudinary.com/privaya/image/upload/w_100,h_100,f_auto,q_auto:low/v1578862017/public/id-card_pd0uv3.svg"
            title="Soyez unique"
            description="Pourquoi créer plusiquers comptes quand votre identité peut être unique ?"
          />
          <Card
            image="https://res.cloudinary.com/privaya/image/upload/w_100,h_100,f_auto,q_auto:low/v1578862017/public/campaign_gsfxf8.svg"
            title="Ne changez rien"
            description="Aucune contrainte, continuez votre activité en ligne avec plus de facilité."
          />
        </div>
      </div>
    </Container>
  </div>
)
