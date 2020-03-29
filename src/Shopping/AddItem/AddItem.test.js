import React from 'react'
import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react'
import AddItem from './AddItem'

test('show disabled button when input is focused', () => {
  render(<AddItem />)

  expect(screen.getByText('Add Item')).toBeDisabled()
})

test('show enabled button when input is not empty', () => {
  render(<AddItem />)

  const input = screen.getByPlaceholderText('Add Item')

  fireEvent.change(input, { target: { value: 'Bean' } })

  expect(screen.getByText('Add Item')).toBeEnabled()
})

test('call onItem callback with item', async () => {
  const mock = jest.fn()

  render(<AddItem onItem={mock} />)

  const input = screen.getByPlaceholderText('Add Item')
  const button = screen.getByText('Add Item')

  fireEvent.change(input, { target: { value: 'Rice' } })
  fireEvent.click(button)

  expect(mock).toBeCalledWith('Rice')
  await waitFor(() => expect(input).not.toHaveValue())
})
