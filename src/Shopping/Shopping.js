import React, { useReducer } from 'react'
import reducer, { INITIAL_STATE, Types } from './reducer'
import { AddItem } from './AddItem'
import { ShoppingList } from './ShoppingList'
import { TotalItems } from './TotalItems'
import * as S from './Shopping.styles'

const Shopping = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

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
        <TotalItems items={state.items} />
      </S.TotalItemsContainer>

      <div>
        <S.ListContainer>
          <ShoppingList
            items={state.items}
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
