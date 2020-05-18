import { Link } from "gatsby"
import React from "react"

import Container from "../atoms/Container"

const image =
  "https://res.cloudinary.com/privaya/image/upload/w_560,h_300,f_auto,q_auto:low/v1578760248/public/alexandru-zdrobau-4bmtMXGuVqo-unsplash_nbk0ne"

export default () => (
  <div
    className="py-8 bg-gray-100 bg-scroll bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(${image})`,
      height: "50vh",
    }}
  >
    <Container>
      <div className="h-full flex flex-col items-center justify-end text-white space-y-4">
        <h1 className="w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
          Reprenez le contrôle de vos données personnelles
        </h1>
        <Link to="/features">
          <button className="p-2 bg-privaya-pink hover:bg-pink-700 rounded">
            En savoir plus
          </button>
        </Link>
      </div>
    </Container>
  </div>
)
