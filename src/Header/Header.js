import React from 'react'
import { Link } from '../Common'
import * as S from './Header.styles'

const Header = () => (
  <S.Header>
    <S.H1>
      <Link href="/">Lysu</Link>
    </S.H1>
  </S.Header>
)

export default Header
