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
      <input
        placeholder="Add Item"
        onChange={handleChange}
        value={text}
      />

      <button
        type="button"
        disabled={!text.length}
        onClick={handleClick}
      >
        Add Item
      </button>
    </S.AddItem>
  )
}

AddItem.propTypes = {
  onItem: PropTypes.func
}

export default AddItem
