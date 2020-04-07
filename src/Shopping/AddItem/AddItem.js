import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './AddItem.styles'

const AddItem = ({ onItem }) => {
  const [text, setText] = useState('')

  const handleChange = evt => setText(evt.target.value)

  const handleClick = () => {
    onItem(text)
    setText('')
  }

  return (
    <S.AddItem>
      <S.Input
        placeholder="Adicionar"
        onChange={handleChange}
        value={text}
        name="new_item"
      />

      <S.Buttom disabled={!text.length} onClick={handleClick}>
        Adicionar
      </S.Buttom>
    </S.AddItem>
  )
}

AddItem.propTypes = {
  onItem: PropTypes.func
}

export default AddItem
