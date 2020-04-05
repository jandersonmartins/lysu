import reducer, { INITIAL_STATE, Types } from './reducer'
import shortid from 'shortid'

jest.mock('shortid')
shortid.mockImplementation(() => '1')

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
      total: 0,
      id: '1'
    }]
  })
})

test('handle DECREMENT_ITEM action', () => {
  const beforeState = {
    ...INITIAL_STATE,
    items: [
      {
        name: 'Beans',
        quantity: 3,
        total: 0,
        id: '1'
      },
      {
        name: 'Rice',
        quantity: 31,
        total: 0,
        id: '2'
      }
    ]
  }

  const actual = reducer(beforeState, {
    type: Types.DECREMENT_ITEM,
    id: '1'
  })

  expect(actual).toEqual({
    ...INITIAL_STATE,
    items: [
      {
        name: 'Beans',
        quantity: 2,
        total: 0,
        id: '1'
      },
      beforeState.items[1]
    ]
  })
})

test('handle INCREMENT_ITEM action', () => {
  const beforeState = {
    ...INITIAL_STATE,
    items: [
      {
        name: 'Beans',
        quantity: 3,
        total: 0,
        id: '1'
      },
      {
        name: 'Rice',
        quantity: 31,
        total: 0,
        id: '2'
      }
    ]
  }

  const actual = reducer(beforeState, {
    type: Types.INCREMENT_ITEM,
    id: '1'
  })

  expect(actual).toEqual({
    ...INITIAL_STATE,
    items: [
      {
        name: 'Beans',
        quantity: 4,
        total: 0,
        id: '1'
      },
      beforeState.items[1]
    ]
  })
})
