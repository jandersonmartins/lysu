import React from 'react'
import * as S from './RemoveButton.styles'

const RemoveButton = ({ children, ...props }) => (
  <S.RemoveButton {...props}>
    {children}
  </S.RemoveButton>
)

export default RemoveButton
