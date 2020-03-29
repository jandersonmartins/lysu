import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddItem = ({ onItem }) => {
  const [text, setText] = useState('')

  const handleChange = evt => setText(evt.target.value)

  const handleClick = () => {
    onItem(text)
    setText('')
  }

  return (
    <div>
      <input
        placeholder="Add Item"
        onChange={handleChange}
        value={text}
      />

      <button
        type="button"
        disabled={!text.length}
        onClick={handleClick}
      >Add Item</button>
    </div>
  )
}

AddItem.propTypes = {
  onItem: PropTypes.func
}

export default AddItem
