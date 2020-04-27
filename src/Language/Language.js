import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './Language.styles'

const LANGUAGES = [
  { key: 'en-US', label: 'English' },
  { key: 'pt-BR', label: 'Português (BR)' }
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
    <div>
      <S.Label onClick={toggleShow} data-testid="current-lang">{currentLang.label}</S.Label>

      {showList && (
        <ul data-testid="language-list">
          {languages.map(({ key, label }) => (
            <li key={key}>
              <S.Label onClick={() => handleOnLangClick(key)} data-testid={key}>
                {label}
              </S.Label>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

Language.propTypes = {
  current: PropTypes.string,
  onSelect: PropTypes.func
}

export default Language
