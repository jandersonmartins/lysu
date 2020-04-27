import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import * as S from './AddItem.styles'

const AddItem = ({ onItem }) => {
  const [text, setText] = useState('')

  const { t } = useTranslation()

  const handleChange = evt => setText(evt.target.value)

  const handleClick = () => {
    onItem(text)
    setText('')
  }

  return (
    <S.AddItem>
      <S.Input
        placeholder={t('add')}
        onChange={handleChange}
        value={text}
        name="new_item"
        data-testid="new-item-input"
      />

      <S.Buttom
        disabled={!text.length}
        onClick={handleClick}
        data-testid="add-new-item"
      >
        {t('add')}
      </S.Buttom>
    </S.AddItem>
  )
}

AddItem.propTypes = {
  onItem: PropTypes.func
}

export default AddItem
