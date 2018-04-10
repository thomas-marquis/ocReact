import React from 'react'
import PropTypes from 'prop-types'

import './GuessCount.css'

const GuessCount = ({guessCount}) => <div className="guesses">{guessCount}</div>

GuessCount.propTypes = {
    guessCount: PropTypes.number.isRequired
}

export default GuessCount