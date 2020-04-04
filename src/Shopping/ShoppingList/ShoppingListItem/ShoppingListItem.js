import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './ShoppingListItem.styles'

const ShoppingListItem = ({
  item,
  onQuantity,
  onValueChange
}) => {
  const [showBottom, setShowBottom] = useState(false)

  const { total, quantity, id, name } = item

  const decrement = () => onQuantity(id, 'decrement')

  const increment = () => onQuantity(id, 'increment')

  const handleChange = evt => onValueChange(id, evt.target.value)

  const toggleShow = () => setShowBottom(!showBottom)

  return (
    <S.Li>
      <S.Top>
        <S.Span onClick={toggleShow}>{name}</S.Span>
        <S.Span>$ {total * quantity}</S.Span>
      </S.Top>

      {showBottom && (
        <S.Bottom>
          <S.BottomDivisor>
            <button onClick={decrement}>-</button>
            <S.Span>{quantity}</S.Span>
            <button onClick={increment}>+</button>
          </S.BottomDivisor>

          <S.BottomDivisor>
            <S.Input
              type="text"
              placeholder="Value"
              value={total}
              onChange={handleChange}
            />
          </S.BottomDivisor>
        </S.Bottom>
      )}
    </S.Li>
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
