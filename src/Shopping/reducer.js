import shortid from 'shortid'

const INITIAL_STATE = {
  items: []
}

const Types = {
  ADD_ITEM: 'ADD_ITEM',
  DECREMENT_ITEM: 'DECREMENT_ITEM'
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return addNewItem(state, action)

    case Types.DECREMENT_ITEM:
      return decrement(state, action)

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

const decrement = (state, { id }) => ({
  ...state,
  items: state.items.map(item => {
    if (item.id === id) {
      return {
        ...item,
        quantity: item.quantity - 1
      }
    }
    return item
  })
})

export default reducer

export { INITIAL_STATE, Types }
