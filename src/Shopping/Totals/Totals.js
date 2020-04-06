import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Totals.styles'

const Totals = ({ label, value }) => (
  <S.Span>{label} <S.Strong>{value}</S.Strong></S.Span>
)

Totals.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default Totals
