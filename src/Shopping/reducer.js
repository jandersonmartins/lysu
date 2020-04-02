import shortid from 'shortid'

const INITIAL_STATE = {
  items: []
}

const Types = {
  ADD_ITEM: 'ADD_ITEM'
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return addNewItem(state, action)

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

export default reducer

export { INITIAL_STATE, Types }
