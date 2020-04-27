import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LANGUAGES = [
  { key: 'en', label: 'English' },
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
      <a onClick={toggleShow} data-testid="current-lang">{currentLang.label}</a>

      {showList && (
        <ul data-testid="language-list">
          {languages.map(({ key, label }) => (
            <li key={key}>
              <a onClick={() => handleOnLangClick(key)} data-testid={key}>
                {label}
              </a>
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
