import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from '../images/logo.svg'

const Header = ({ siteTitle }) => {
  return (
    <header>
      <nav>
        <Link
          className="logo"
          to="/"
        >
          <img className="logo" src={Logo} alt="logo" />
          <h1>
            {siteTitle}
          </h1>
        </Link>
        <span className="hline"> | </span>
        <div className="desktopLinks">
          <Link to="/p2">
            <h2> page2 </h2>
          </Link>
          <Link to="/p3">
            <h2> page3 </h2>
          </Link>
          <Link to="/p4">
            <h2> page4 </h2>
          </Link>
        </div>
        {/* <div className="mobileLinks">
          <button className="menuButton" onClick={handleClick}>
            <FaBars />
          </button>
          <Menu
            className="navMenu"
            id="simple-menu"
            elevation={4}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}> <Link to="/"> Dashboard </Link> </MenuItem>
            <MenuItem onClick={handleClose}> <Link to="/about"> About </Link> </MenuItem>
            <MenuItem onClick={handleClose}> <Link to="/contribute"> Contribute </Link> </MenuItem>
          </Menu>
        </div> */}
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
