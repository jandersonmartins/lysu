import React from 'react'
import PropTypes from 'prop-types'
import { ShoppingListItem } from './ShoppingListItem'
import * as S from './ShoppingList.styles'

const ShoppingList = ({
  items,
  onQuantity,
  onValueChange,
  onRemove
}) => (
  <S.Ul>
    {items.map(item =>
      <ShoppingListItem
        key={item.id}
        item={item}
        onQuantity={onQuantity}
        onValueChange={onValueChange}
        onRemove={onRemove}
      />
    )}
  </S.Ul>
)

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      quantity: PropTypes.number,
      value: PropTypes.number,
      name: PropTypes.string
    })
  ),
  onQuantity: PropTypes.func,
  onValueChange: PropTypes.func,
  onRemove: PropTypes.func
}

export default ShoppingList
