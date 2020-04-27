import React from 'react'
import PropTypes from 'prop-types'
import * as S from './RemoveButton.styles'

const RemoveButton = ({ children, ...props }) => (
  <S.RemoveButton {...props}>
    {children}
  </S.RemoveButton>
)

RemoveButton.propTypes = {
  children: PropTypes.node
}

export default RemoveButton
