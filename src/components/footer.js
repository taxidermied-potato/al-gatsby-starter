import * as React from "react"
import PropTypes from "prop-types"

const Footer = ({ author }) => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} <a href="https://altyin.com">{author}</a>
      </p>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer
