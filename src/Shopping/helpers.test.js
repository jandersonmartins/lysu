import { totalValue } from './helpers'

test('return total from items value', () => {
  const items = [
    { value: 2, quantity: 1 },
    { value: 3, quantity: 3 }
  ]

  const actual = totalValue(items)

  expect(actual).toEqual('$ 11')
})
