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

  expect(screen.getByText('Adicionar')).toBeDisabled()
})

test('show enabled button when input is not empty', () => {
  renderCmp()

  const input = screen.getByPlaceholderText('Adicionar')

  fireEvent.change(input, { target: { value: 'Bean' } })

  expect(screen.getByText('Adicionar')).toBeEnabled()
})

test('call onItem callback with item', async () => {
  const mock = jest.fn()

  renderCmp({ onItem: mock })

  const input = screen.getByPlaceholderText('Adicionar')
  const button = screen.getByText('Adicionar')

  fireEvent.change(input, { target: { value: 'Rice' } })
  fireEvent.click(button)

  expect(mock).toBeCalledWith('Rice')
  await waitFor(() => expect(input).not.toHaveValue())
})
