import React from "react"
import ReactPlayer from "react-player"

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
    <SEO title="Fonctionnalités" />
    <BlockImageText
      image="https://res.cloudinary.com/privaya/image/upload/v1575316819/public/qrcode_shopping_odeqpv.svg"
      imageAlt=""
      title="Découvrez la clef Privaya"
      body="Regroupez toutes vos cartes de fidelité dans votre clef Privaya et reprenez le contrôle sur vos données partagées avec chaque enseigne. Inscrivez-vous vite pour obtenir la votre !"
      grayBg
      reversed
    />
    <div className="md:pb-8 bg-gray-100 flex justify-center">
      <ReactPlayer
        url="https://res.cloudinary.com/privaya/video/upload/v1584381807/public/Privaya-1080p-7efdf1a2-f8d9-4536-a851-659903f3150b_lerbs6.mp4"
        playIcon={
          <button className="px-4 py-2 rounded bg-privaya-pink hover:bg-pink-700 shadow text-white flex items-center space-x-2">
            <span>Le concept en video</span>
            <svg
              className="fill-current h-8 w-8"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path>
            </svg>
          </button>
        }
        light="https://res.cloudinary.com/privaya/image/upload/f_auto,q_auto:low/v1589796375/public/privaya_key_video_thumbnail_vl0nqq.png"
        controls
        playing
      />
    </div>
    <BlockImageText
      image="https://res.cloudinary.com/privaya/image/upload/v1575367904/public/undraw_fingerprint_swrc_bekjlc.svg"
      imageAlt=""
      title="Une identité unique"
      body="Grâce à Privaya, votre identité est unique et protégée. Vous pouvez vous connecter sur tous les sites web et pouvez rejoindre tous les programmes de fidélité des marchands. Vous changez d'adresse ? Aucun problème, votre modification est répercutée partout où vous avez autorisé un partage de cette information."
    />
    <BlockImageText
      image="https://res.cloudinary.com/privaya/image/upload/v1575367808/public/undraw_accept_terms_4in8_btbb1h.svg"
      imageAlt=""
      title="Contrôlez le partage de vos données"
      body="Combien de fois avez-vous partagé vos informations personnelles ? Impossible de savoir qui y accède ... Et pourtant votre nom, prénom, e-mail ou adresse postale sont stockées, partagées, voire revendues par différentes enseignes ! Avec Privaya vous décidez avec qui vous partagez vos données, et vous pouvez révoquer cet accès à n'importe quel moment !"
      reversed
    />
    <BlockImageText
      image="https://res.cloudinary.com/privaya/image/upload/v1577639720/public/undraw_Security_on_ff2u_b4wacy.svg"
      imageAlt=""
      title="Un coffre-fort digital"
      body="Le Réglement Général sur la Protection des Données (RGPD) a pour but de redonner le contrôle des données personnelles aux utilisateurs à travers la notion de consentement. Privaya propose une approche complète, en ayant un contrôle instantané sur votre identité unique. Privaya étant une entité entièrement indépendante, aucun partage de donnée personnelle ne peut être réalisée sans votre accord et votre action."
    />
    <LastArticles />
  </Layout>
)
