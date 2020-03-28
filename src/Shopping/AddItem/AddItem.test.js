import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
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
