import shortid from 'shortid'

const INITIAL_STATE = {
  items: []
}

const Types = {
  ADD_ITEM: 'ADD_ITEM',
  DECREMENT_ITEM: 'DECREMENT_ITEM',
  INCREMENT_ITEM: 'INCREMENT_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CHANGE_ITEM_VALUE: 'CHANGE_ITEM_VALUE'
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return addNewItem(state, action)

    case Types.DECREMENT_ITEM:
      return changeItem(decrement, state, action)

    case Types.INCREMENT_ITEM:
      return changeItem(increment, state, action)

    case Types.REMOVE_ITEM:
      return removeItem(state, action)

    case Types.CHANGE_ITEM_VALUE:
      return changeItem(changeItemValue, state, action)

    default:
      return { ...state }
  }
}

const addNewItem = (state, action) => ({
  ...state,
  items: state.items.concat({
    ...action.item,
    quantity: 0,
    value: 0,
    id: shortid.generate()
  })
})

const changeItem = (operation, state, action) => {
  const { id } = action

  return {
    ...state,
    items: state.items.map(item => {
      if (item.id === id) {
        return operation(item, action)
      }
      return item
    })
  }
}

const removeItem = (state, { id }) => ({
  ...state,
  items: state.items.filter(item => item.id !== id)
})

const decrement = item => {
  const { quantity } = item
  return !quantity ? item : ({ ...item, quantity: quantity - 1 })
}

const increment = item => ({ ...item, quantity: item.quantity + 1 })

const changeItemValue = (item, action) => ({ ...item, value: action.value })

export default reducer

export { INITIAL_STATE, Types }
