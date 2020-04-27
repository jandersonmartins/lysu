import React from 'react'
import {
  render,
  screen,
  fireEvent,
  configure
} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import ShoppingListItem from './ShoppingListItem'

configure({ testIdAttribute: 'data-testid' })

const renderCmp = props => render(
  <ThemeProvider theme={{ colors: {} }}>
    <ShoppingListItem {...props} />
  </ThemeProvider>
)

test('show value value', () => {
  const item = {
    id: '1',
    name: 'Beans',
    quantity: 2,
    value: 20
  }

  renderCmp({
    item,
    onQuantity: jest.fn(),
    onValueChange: jest.fn()
  })

  screen.getByText('$ 40')
})

test('call decrement function', () => {
  const item = {
    id: '1',
    name: 'Beans',
    quantity: 1,
    value: 20
  }

  const onQuantity = jest.fn()

  renderCmp({
    item,
    onQuantity
  })

  const btn = screen.getByTestId('quantity-decrement')
  fireEvent.click(btn)

  expect(onQuantity).toBeCalledWith(item.id, 'decrement')
})

test('call increment function', () => {
  const item = {
    id: '1',
    name: 'Beans',
    quantity: 1,
    value: 20
  }

  const onQuantity = jest.fn()

  renderCmp({
    item,
    onQuantity
  })

  const btn = screen.getByTestId('quantity-increment')
  fireEvent.click(btn)

  expect(onQuantity).toBeCalledWith(item.id, 'increment')
})

test('call onValueChange callback', () => {
  const item = {
    id: '1',
    name: 'Beans',
    quantity: 1,
    value: 0
  }

  const onValueChange = jest.fn()

  renderCmp({
    item,
    onQuantity: jest.fn(),
    onValueChange
  })

  const input = screen.getByPlaceholderText('Value')
  fireEvent.change(input, { target: { value: 13 } })

  expect(onValueChange).toBeCalledWith(item.id, 0.13)
})

test('call onRemove callback', () => {
  const item = {
    id: '1',
    name: 'Beans',
    quantity: 1,
    value: 20
  }

  const onRemove = jest.fn()

  renderCmp({ item, onRemove })

  const removeBtn = screen.getByTestId('remove-item')
  fireEvent.click(removeBtn)

  expect(onRemove).toBeCalledWith(item.id)
})
