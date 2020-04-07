import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { RoundButton } from './RoundButton'
import { RemoveButton } from './RemoveButton'
import { formatCurrency } from '../../helpers'
import * as S from './ShoppingListItem.styles'

const ShoppingListItem = ({
  item,
  onQuantity,
  onValueChange,
  onRemove
}) => {
  const [showBottom, setShowBottom] = useState(false)

  const { value, quantity, id, name } = item

  const decrement = () => onQuantity(id, 'decrement')

  const increment = () => onQuantity(id, 'increment')

  const handleChange = (masked, value) => onValueChange(id, value)

  const toggleShow = () => setShowBottom(!showBottom)

  return (
    <S.Li>
      <S.Top>
        <S.Span onClick={toggleShow}>{name}</S.Span>
        <S.Span data-test="total-item">{formatCurrency(value * quantity)}</S.Span>
      </S.Top>

      {showBottom && (
        <S.Bottom>
          <S.HandlersSection>
            <S.Handlers>
              <RoundButton data-test="quantity-decrement" onClick={decrement}>-</RoundButton>
              <S.Quantity data-test="quantity">{quantity}</S.Quantity>
              <RoundButton data-test="quantity-increment" onClick={increment}>+</RoundButton>
            </S.Handlers>

            <S.Handlers>
              <S.Input
                type="text"
                placeholder="Value"
                value={value}
                name="value"
                onChange={handleChange}
                decimalSeparator=","
                thousandSeparator="."
              />
            </S.Handlers>
          </S.HandlersSection>

          <RemoveButton data-test="remove-item" onClick={() => onRemove(id)} />
        </S.Bottom>
      )}
    </S.Li>
  )
}

ShoppingListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    quantity: PropTypes.number,
    value: PropTypes.number,
    name: PropTypes.string
  }),
  onQuantity: PropTypes.func,
  onValueChange: PropTypes.func,
  onRemove: PropTypes.func
}

export default ShoppingListItem
