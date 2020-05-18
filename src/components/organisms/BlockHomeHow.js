import React from "react"

import Container from "../atoms/Container"

const Card = ({ image, title, description }) => (
  <div className="flex flex-col items-center lg:divide-y lg:divide-privaya-pink">
    <h3 className="w-full lg:py-2 text-center text-xl text-pink-700 lg:text-black">
      {title}
    </h3>
    <p className="w-full lg:py-2 text-center">{description}</p>
  </div>
)

export default () => (
  <div className="py-8">
    <Container>
      <div className="space-y-4">
        <div className="flex justify-center h-64">
          <img
            className="object-contain"
            src="https://res.cloudinary.com/privaya/image/upload/w_400,h_300,f_auto,q_auto:low/v1578759752/public/Mockup-20200111_shbghp"
            alt="tablet"
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
          <Card
            title="Créez votre compte"
            description="En quelques clics seulement votre compte sera opérationnel."
          />
          <Card
            title="Complétez vos informations"
            description="Remplissez toutes les données qui vous seront utiles sur Internet. Vous n'aurez plus besoin de les renseigner nulle part ailleurs !"
          />
          <Card
            title="Partagez en toute sécurité"
            description="Décidez d'accepter ou de refuser le partage de données avec n'importe quel site web. Révoquez l'accès à tout moment !"
          />
        </div>
      </div>
    </Container>
  </div>
)
