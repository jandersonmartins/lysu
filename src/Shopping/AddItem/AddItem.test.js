import React from 'react'
import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import AddItem from './AddItem'

const renderCmp = (props = {}) => render(
  <ThemeProvider theme={{ colors: {} }}>
    <AddItem {...props} />
  </ThemeProvider>
)

test('show disabled button when input is focused', () => {
  renderCmp()

  expect(screen.getByText('Add Item')).toBeDisabled()
})

test('show enabled button when input is not empty', () => {
  renderCmp()

  const input = screen.getByPlaceholderText('Add Item')

  fireEvent.change(input, { target: { value: 'Bean' } })

  expect(screen.getByText('Add Item')).toBeEnabled()
})

test('call onItem callback with item', async () => {
  const mock = jest.fn()

  renderCmp({ onItem: mock })

  const input = screen.getByPlaceholderText('Add Item')
  const button = screen.getByText('Add Item')

  fireEvent.change(input, { target: { value: 'Rice' } })
  fireEvent.click(button)

  expect(mock).toBeCalledWith('Rice')
  await waitFor(() => expect(input).not.toHaveValue())
})
