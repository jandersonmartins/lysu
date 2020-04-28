import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './Language.styles'

const LANGUAGES = [
  { key: 'en-US', label: 'EN' },
  { key: 'pt-BR', label: 'PT' }
]

const Language = ({ current, onSelect }) => {
  const [showList, setShowList] = useState(false)

  const currentLang = LANGUAGES.find(({ key }) => key === current)
  const languages = LANGUAGES.filter(({ key }) => key !== current)

  const toggleShow = () => setShowList(!showList)

  const handleOnLangClick = key => {
    toggleShow()
    onSelect(key)
  }

  return (
    <S.Container>
      <S.Label onClick={toggleShow} data-testid="current-lang">{currentLang.label}</S.Label>

      {showList && (
        <S.Ul data-testid="language-list">
          {languages.map(({ key, label }) => (
            <li key={key}>
              <S.Label onClick={() => handleOnLangClick(key)} data-testid={key}>
                {label}
              </S.Label>
            </li>
          ))}
        </S.Ul>
      )}
    </S.Container>
  )
}

Language.propTypes = {
  current: PropTypes.string,
  onSelect: PropTypes.func
}

export default Language
