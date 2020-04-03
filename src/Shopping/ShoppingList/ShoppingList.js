import React from 'react'
import PropTypes from 'prop-types'
import { ShoppingListItem } from './ShoppingListItem'
import * as S from './ShoppingList.styles'

const ShoppingList = ({
  items,
  onQuantity,
  onValueChange
}) => (
  <S.Ul>
    {items.map(item =>
      <ShoppingListItem
        key={item.id}
        item={item}
        onQuantity={onQuantity}
        onValueChange={onValueChange}
      />
    )}
  </S.Ul>
)

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      quantity: PropTypes.number,
      total: PropTypes.number,
      name: PropTypes.string
    })
  ),
  onQuantity: PropTypes.func,
  onValueChange: PropTypes.func
}

export default ShoppingList
