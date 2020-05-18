import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

import Container from "./atoms/Container"

const BG_COLOR = "bg-privaya-green"
const BG_HOVER_COLOR = "hover:bg-green-700"

export default ({ transparent }) => {
  const [bgColor, setBgColor] = useState(BG_COLOR)

  useEffect(() => {
    const handleScroll = event => {
      if (transparent) {
        if (window.scrollY > 50 && bgColor !== BG_COLOR) {
          setBgColor(BG_COLOR)
        }
        if (window.scrollY <= 50 && bgColor !== "bg-transparent") {
          setBgColor("bg-transparent")
        }
      }
    }

    if (transparent) {
      if (window.scrollY < 50) setBgColor("bg-transparent")
      window.addEventListener("scroll", handleScroll)
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [bgColor, transparent])

  return (
    <header
      className={`fixed w-full h-16 ${bgColor} text-white overflow-hidden`}
    >
      <Container>
        <div className="h-full flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://res.cloudinary.com/privaya/image/upload/v1589824640/public/logo--reverse_w52lzc.svg"
              alt="logo Privaya"
            />
          </Link>
          <nav className="hidden md:block space-x-4 lg:space-x-8">
            <Link
              to="/features"
              className={`px-4 py-2 rounded ${BG_HOVER_COLOR} hover:shadow`}
            >
              Comment ça marche ?
            </Link>
            <Link
              to="/blog"
              className={`px-4 py-2 rounded ${BG_HOVER_COLOR} hover:shadow`}
            >
              Blog
            </Link>
            {/* <Link
              to="/contact"
              className={`px-4 py-2 rounded ${BG_HOVER_COLOR} hover:shadow`}
            >
              Contact
            </Link> */}
            <Link
              to="/business"
              className="px-4 py-2 rounded bg-privaya-pink hover:bg-pink-700 shadow"
            >
              Pro
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}
