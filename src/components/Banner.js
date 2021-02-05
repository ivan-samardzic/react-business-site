import React from 'react'
import PropTypes from 'prop-types'

const Banner = (props) =>{
    return (
        <div className="banner">
            <h3 className="banner-message">Grow your business</h3>
            <h3 className="banner-upfront-message">Give your business a boost with a beatifully crafted homepage</h3>
            <button class="button">{props.message}</button>
        </div>
    )
}


Banner.defaultProps = {
    message: 'Check To See More'
}

Banner.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Banner
