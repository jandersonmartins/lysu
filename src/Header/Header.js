import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../Link'
import { Language } from '../Language'
import * as S from './Header.styles'

const Header = ({ currentLang, onSelectLang }) => (
  <S.Header>
    <S.H1>
      <Link href="/">Lysu</Link>
    </S.H1>

    <S.LanguageContainer>
      <Language current={currentLang} onSelect={onSelectLang} />
    </S.LanguageContainer>
  </S.Header>
)

Header.propTypes = {
  currentLang: PropTypes.string,
  onSelectLang: PropTypes.func
}

export default Header
