import reducer, { INITIAL_STATE, Types } from './reducer'

test('returns initial state', () => {
  const actual = reducer(undefined, { type: 'UNKNOWN' })

  expect(actual).toEqual({ ...INITIAL_STATE })
})

test('handle ADD_ITEM action', () => {
  const item = { name: 'Bean' }

  const actual = reducer(undefined, {
    type: Types.ADD_ITEM,
    item
  })

  expect(actual).toEqual({
    ...INITIAL_STATE,
    items: [{
      ...item,
      quantity: 0,
      total: 0
    }]
  })
})
