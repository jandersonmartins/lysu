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
    value: 20
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
    value: 20
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

test('call onRemove callback', () => {
  const item = {
    id: '1',
    name: 'Beans',
    quantity: 1,
    value: 20
  }

  const onRemove = jest.fn()

  renderCmp({ item, onRemove })

  openBottom(screen, item.name)

  const removeBtn = screen.getByText('Remover')
  fireEvent.click(removeBtn)

  expect(onRemove).toBeCalledWith(item.id)
})
