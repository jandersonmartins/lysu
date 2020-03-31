import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../Button'
import { Input } from '../../Input'
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
      <Input
        placeholder="Add Item"
        onChange={handleChange}
        value={text}
      />

      <Button disabled={!text.length} onClick={handleClick}>
        Add Item
      </Button>
    </S.AddItem>
  )
}

AddItem.propTypes = {
  onItem: PropTypes.func
}

export default AddItem
