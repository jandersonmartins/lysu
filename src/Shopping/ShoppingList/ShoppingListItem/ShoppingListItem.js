import React from 'react'
import PropTypes from 'prop-types'

const ShoppingListItem = ({
  item,
  onQuantity,
  onValueChange
}) => {
  const decrement = () => onQuantity(item.id, 'decrement')

  const increment = () => onQuantity(item.id, 'increment')

  const handleChange = evt => onValueChange(item.id, evt.target.value)

  return (
    <li>
      <span>{item.name}</span>
      <span>{item.quantity}</span>

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      <input
        type="text"
        placeholder="Value"
        onChange={handleChange}
      />
    </li>
  )
}

ShoppingListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    quantity: PropTypes.number,
    total: PropTypes.number,
    name: PropTypes.string
  }),
  onQuantity: PropTypes.func,
  onValueChange: PropTypes.func
}

export default ShoppingListItem
