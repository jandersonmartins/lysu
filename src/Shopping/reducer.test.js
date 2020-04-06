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
      value: 0,
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
        value: 0,
        id: '1'
      },
      {
        name: 'Rice',
        quantity: 31,
        value: 0,
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
        value: 0,
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
        value: 0,
        id: '1'
      },
      {
        name: 'Rice',
        quantity: 31,
        value: 0,
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
        value: 0,
        id: '1'
      },
      beforeState.items[1]
    ]
  })
})

test('handle REMOVE_ITEM action', () => {
  const beforeState = {
    ...INITIAL_STATE,
    items: [
      {
        name: 'Beans',
        quantity: 3,
        value: 0,
        id: '1'
      },
      {
        name: 'Rice',
        quantity: 31,
        value: 0,
        id: '2'
      }
    ]
  }

  const actual = reducer(beforeState, {
    type: Types.REMOVE_ITEM,
    id: '1'
  })

  expect(actual).toEqual({
    ...beforeState,
    items: [beforeState.items[1]]
  })
})

test('handle CHANGE_ITEM_VALUE', () => {
  const beforeState = {
    ...INITIAL_STATE,
    items: [
      {
        name: 'Beans',
        quantity: 3,
        value: 0,
        id: '1'
      },
      {
        name: 'Rice',
        quantity: 31,
        value: 0,
        id: '2'
      }
    ]
  }

  const actual = reducer(beforeState, {
    type: Types.CHANGE_ITEM_VALUE,
    id: '2',
    value: 10
  })

  expect(actual).toEqual({
    ...beforeState,
    items: [
      beforeState.items[0],
      {
        ...beforeState.items[1],
        value: 10
      }
    ]
  })
})
