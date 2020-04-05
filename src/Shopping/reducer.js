import shortid from 'shortid'

const INITIAL_STATE = {
  items: []
}

const Types = {
  ADD_ITEM: 'ADD_ITEM',
  DECREMENT_ITEM: 'DECREMENT_ITEM',
  INCREMENT_ITEM: 'INCREMENT_ITEM'
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return addNewItem(state, action)

    case Types.DECREMENT_ITEM:
      return operateQuantity(decrement, state, action)

    case Types.INCREMENT_ITEM:
      return operateQuantity(increment, state, action)

    default:
      return { ...state }
  }
}

const addNewItem = (state, action) => ({
  ...state,
  items: state.items.concat({
    ...action.item,
    quantity: 0,
    total: 0,
    id: shortid.generate()
  })
})

const operateQuantity = (operation, state, { id }) => ({
  ...state,
  items: state.items.map(item => {
    if (item.id === id) {
      return {
        ...item,
        quantity: operation(item)
      }
    }
    return item
  })
})

const decrement = item => item.quantity - 1

const increment = item => item.quantity + 1

export default reducer

export { INITIAL_STATE, Types }
