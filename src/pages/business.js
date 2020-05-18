import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from "../components/atoms/Container"
import LastArticles from "../components/organisms/BlockLastArticles"

const BlockImageText = ({ image, imageAlt, title, body, grayBg, reversed }) => (
  <div className={`py-8 ${grayBg && "bg-gray-100"}`}>
    <Container>
      <div
        className={`flex flex-col-reverse ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-center md:flex-row`}
      >
        <img
          className="md:w-1/2 object-contain h-48 w-48"
          src={image}
          alt={imageAlt}
        />
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl">{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </Container>
  </div>
)

export default () => (
  <Layout>
    <SEO title="Pro" />
    <BlockImageText
      image="https://res.cloudinary.com/privaya/image/upload/v1575367808/public/undraw_gdpr_3xfb_p8r0nc.svg"
      imageAlt=""
      title="Devenez conforme RGPD en quelques instants"
      body="Avec Privaya, la conformité avec le Règlement Général pour la Protection des Données (RGPD) est simple : les données personnelles sont intégralements gérées via la plate-forme Privaya. Vos clients, prospects ou partenaires peuvent ainsi mettre à jours leurs données personnelles pour une meilleure qualité ! Privaya est entièrement conforme au RGPD, et vous apporte cette conformité par son utilisation simple et directe."
    />
    <BlockImageText
      image="https://res.cloudinary.com/privaya/image/upload/v1577639721/public/undraw_selection_92i4_das3ed.svg"
      imageAlt=""
      title="Sélectionnez les données dont vous avez besoin"
      body="Avec la solution Privaya, sélectionnez les données personnelles dont vous avez besoin, avec une durée précise ainsi qu'une raison légitime. A travers cette étape, vous avez déjà la possibilité de générer votre Politique de Confidentialité entièrement personnalisé à vos besoins ! Conformément au RGPD, la collecte de donnée doit être définie selon la durée de rétention et la raison de la collecte. Grâce à Privaya, vous êtes en accord avec ce règlement."
      reversed
    />
    <BlockImageText
      image="https://res.cloudinary.com/privaya/image/upload/v1577639723/public/undraw_business_deal_cpi9_zt1igf.svg"
      imageAlt=""
      title="Redonnez confiance à vos clients"
      body="Grâce à Privaya, vos utilisateurs pourront contrôler le partage de leurs données personnelles : ils peuvent l'autoriser ou l'arrêter à tout moment. Ils peuvent aussi mettre à jour leurs données, votre base utilisateurs sera ainsi de meilleur qualité. Les données de vos utilisateurs seront intégralements stockées chez Privaya, c'est eux qui décideront du partage !"
    />
    <BlockImageText
      image="https://res.cloudinary.com/privaya/image/upload/v1577639720/public/undraw_online_transactions_02ka_bl9yw8.svg"
      imageAlt=""
      title="Utilisez les données personnelles avec Privaya"
      body="Votre société ne stockant plus de données personnelles, il est tout de même nécessaire de pouvoir y accéder. En pratique, vos activités se dérouleront toujours de la même façon. Par exemple, pour générer une facture, votre système de facturation pourra aller récupérer les données nécessaires directement chez Privaya via une API. Les données ayant une légitimité contractuelle (par exemple, facturation), seront toujours accessibles en cas de besoin légal."
      reversed
    />
    <LastArticles />
  </Layout>
)
