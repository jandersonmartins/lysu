import React from 'react'
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Shopping from './Shopping'

const renderCmp = () => render(
  <ThemeProvider theme={{ colors: {} }}>
    <Shopping />
  </ThemeProvider>
)

test('start empty items', () => {
  renderCmp()

  expect(screen.getByText('Items 0')).toBeTruthy()
})

test('add a new item', () => {
  renderCmp()

  const input = screen.getByPlaceholderText('Add Item')
  const btn = screen.getByText('Add Item')

  fireEvent.change(input, { target: { value: 'Oil' } })
  fireEvent.click(btn)

  expect(screen.getByText('Items 1')).toBeTruthy()
})
