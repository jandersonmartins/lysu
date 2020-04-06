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
            onQuantity={console.log}
            onValueChange={console.log}
            onRemove={console.log}
          />
        </S.ListContainer>
      </div>
    </div>
  )
}

export default Shopping
