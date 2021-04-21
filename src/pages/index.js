import * as React from "react"
import { AiOutlineMessage, AiOutlineCompass } from "react-icons/ai"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button/button"

const IndexPage = () => (
  <Layout>
    <SEO title={"home"} />
    <section>
      <div className="containerSmall">
        <h3> Lorem Ipsum </h3>
        <p><span className="highlight">dolor</span> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className="btnGroup">
          <Button filled svgSpin onClick={() => console.log("klick")}> <AiOutlineMessage /> contact </Button>
          <Button filled svgSpin onClick={() => console.log("klack")}> <AiOutlineCompass /> explore </Button>
        </div>
      </div>
    </section>
  </Layout>
)


export default IndexPage
