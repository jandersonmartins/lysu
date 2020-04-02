import React from 'react'
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react'
import ShoppingListItem from './ShoppingListItem'

const renderCmp = props => render(
  <ShoppingListItem {...props} />
)

test('call decrement function', () => {
  const item = {
    id: '1',
    name: 'Beans',
    quantity: 1,
    total: 20
  }

  const onQuantity = jest.fn()

  renderCmp({
    item,
    onQuantity
  })

  const btn = screen.getByText('-')
  fireEvent.click(btn)

  expect(onQuantity).toBeCalledWith(item.id, 'decrement')
})

test('call increment function', () => {
  const item = {
    id: '1',
    name: 'Beans',
    quantity: 1,
    total: 20
  }

  const onQuantity = jest.fn()

  renderCmp({
    item,
    onQuantity
  })

  const btn = screen.getByText('+')
  fireEvent.click(btn)

  expect(onQuantity).toBeCalledWith(item.id, 'increment')
})

test('call onValueChange callback', () => {
  const item = {
    id: '1',
    name: 'Beans',
    quantity: 1,
    total: 20
  }

  const onValueChange = jest.fn()

  renderCmp({
    item,
    onQuantity: jest.fn(),
    onValueChange
  })

  const input = screen.getByPlaceholderText('Value')
  fireEvent.change(input, { target: { value: 13 } })

  expect(onValueChange).toBeCalledWith(item.id, '13')
})
