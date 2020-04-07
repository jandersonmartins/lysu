import React from 'react'
import createPersistedReducer from 'use-persisted-reducer'
import reducer, { INITIAL_STATE, Types } from './reducer'
import { AddItem } from './AddItem'
import { ShoppingList } from './ShoppingList'
import { Totals } from './Totals'
import { totalValue } from './helpers'
import * as S from './Shopping.styles'

const usePersistedReducer = createPersistedReducer('shopping')

const Shopping = () => {
  const [{ items }, dispatch] = usePersistedReducer(reducer, INITIAL_STATE)

  const handleOnItem = name => dispatch({
    type: Types.ADD_ITEM,
    item: { name }
  })

  const handleQuantity = (id, operation) => {
    const type = (operation === 'increment')
      ? Types.INCREMENT_ITEM
      : Types.DECREMENT_ITEM

    dispatch({ type, id })
  }

  const handleChange = (id, value) => dispatch({
    type: Types.CHANGE_ITEM_VALUE,
    id,
    value
  })

  const handleRemove = id => dispatch({
    type: Types.REMOVE_ITEM,
    id
  })

  return (
    <div>
      <div>
        <AddItem onItem={handleOnItem} />
      </div>

      <S.TotalItemsContainer>
        <Totals
          data-test="items-added"
          label="Items"
          value={items.length}
        />

        <S.Divisor />

        <Totals
          data-test="total-all-items"
          label="Valor Total"
          value={totalValue(items)}
        />
      </S.TotalItemsContainer>

      <div>
        <S.ListContainer>
          <ShoppingList
            items={items}
            onQuantity={handleQuantity}
            onValueChange={handleChange}
            onRemove={handleRemove}
          />
        </S.ListContainer>
      </div>
    </div>
  )
}

export default Shopping
