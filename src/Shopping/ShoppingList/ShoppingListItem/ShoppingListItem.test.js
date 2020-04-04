import React from 'react'
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import ShoppingListItem from './ShoppingListItem'

const renderCmp = props => render(
  <ThemeProvider theme={{ colors: {} }}>
    <ShoppingListItem {...props} />
  </ThemeProvider>
)

const openBottom = (screenArg, name) => {
  const spanName = screenArg.getByText(name)
  fireEvent.click(spanName)
}

test('show total value', () => {
  const item = {
    id: '1',
    name: 'Beans',
    quantity: 2,
    total: 20
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
    total: 20
  }

  const onQuantity = jest.fn()

  renderCmp({
    item,
    onQuantity
  })

  openBottom(screen, item.name)

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

  openBottom(screen, item.name)

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

  openBottom(screen, item.name)

  const input = screen.getByPlaceholderText('Value')
  fireEvent.change(input, { target: { value: 13 } })

  expect(onValueChange).toBeCalledWith(item.id, '13')
})
