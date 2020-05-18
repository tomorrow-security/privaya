import { format } from "date-fns"
import { Link } from "gatsby"
import React from "react"

import Container from "./atoms/Container"

export default () => (
  <footer className="bg-gray-900">
    <Container>
      <div className="divide-y divide-gray-700">
        <div className="py-8 flex items-center justify-center space-x-4">
          <img
            src="https://res.cloudinary.com/privaya/image/upload/v1589711946/public/privaya_logo_short_gewivx.svg"
            alt="logo Privaya"
          />
          <span className="text-white text-md sm:text-2xl">
            Privaya vous aide à reprendre le contrôle de vos données
            personnelles
          </span>
        </div>
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
          <div>
            <span className="text-xl">À propos de Privaya</span>
            <ul>
              <li>
                <Link to="/features" className="text-sm font-light">
                  Comment ça marche ?
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm font-light">
                  L'équipe
                </Link>
              </li>
              {/* <li>
                <Link to="/contact" className="text-sm font-light">
                  Contact
                </Link>
              </li> */}
              <li>
                <Link to="/blog" className="text-sm font-light">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-sm font-light">
                  Pro
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-xl">Légal</span>
            <ul>
              <li>
                <Link to="/legal" className="text-sm font-light">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm font-light">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-auto space-y-4">
            <p className="text-xs">
              Nous nous engageons à ne jamais partager aucune information sur
              votre identité en ligne. Vous seul pouvez choisir de partager vos
              données personnelles.
            </p>
            <p className="text-xs">
              Privaya est une marque de la société Tomorrow Security, société
              par actions simplifiée, immatriculée au Registre du Commerce et
              des Sociétés (RCS) sous le numéro 842571549.
            </p>
            <p className="text-xs">{`© ${format(
              new Date(),
              "yyyy"
            )} Privaya`}</p>
          </div>
        </div>
      </div>
    </Container>
  </footer>
)
