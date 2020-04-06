import React from 'react'
import PropTypes from 'prop-types'
import * as S from './TotalItems.styles'

const TotalItems = ({ items }) => (
  <S.Span>Items <S.Strong>{items.length}</S.Strong></S.Span>
)

TotalItems.propTypes = {
  items: PropTypes.array
}

export default TotalItems
