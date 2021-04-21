import * as React from "react"
import PropTypes from "prop-types"

import "./button.scss"

const Button = ({ filled, svgSpin, svgShrink, onClick, children }) => {
  let classString = "button transition-up" + (filled ? " filled" : "") + (svgSpin ? " spin" : "") + (svgShrink ? " shrink" : "")

  return (
    <button onClick={onClick} className={classString}>
      {children}
    </button>
  )
}

Button.propTypes = {
  filled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Button