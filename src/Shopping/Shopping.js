import React from 'react'
import createPersistedReducer from 'use-persisted-reducer'
import { useTranslation } from 'react-i18next'
import reducer, { INITIAL_STATE, Types } from './reducer'
import { AddItem } from './AddItem'
import { ShoppingList } from './ShoppingList'
import { Totals } from './Totals'
import { totalValue } from './helpers'
import * as S from './Shopping.styles'

const usePersistedReducer = createPersistedReducer('shopping')

const Shopping = () => {
  const [{ items }, dispatch] = usePersistedReducer(reducer, INITIAL_STATE)

  const { t } = useTranslation()

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
          data-testid="items-added"
          label={t('items')}
          value={items.length}
        />

        <S.Divisor />

        <Totals
          data-testid="total-all-items"
          label={t('totalValue')}
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
