import React, { useState } from 'react'

const AddItem = () => {
  const [text, setText] = useState('')

  const handleChange = evt => setText(evt.target.value)

  return (
    <div>
      <input placeholder="Add Item" onChange={handleChange} />
      <button type="button" disabled={!text.length}>Add Item</button>
    </div>
  )
}

export default AddItem
