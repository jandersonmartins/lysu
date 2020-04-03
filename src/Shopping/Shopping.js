import React, { useReducer } from 'react'
import reducer, { INITIAL_STATE, Types } from './reducer'
import { AddItem } from './AddItem'
import { ShoppingList } from './ShoppingList'

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

      <div>
        {/** TODO: Total items component */}
        Items {state.items.length}

        <div>
          <ShoppingList
            items={state.items}
            onQuantity={console.log}
            onValueChange={console.log}
          />
        </div>
      </div>
    </div>
  )
}

export default Shopping
