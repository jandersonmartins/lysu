import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Language from './Language'

const renderCmp = props => render(
  <ThemeProvider theme={{ colors: {} }}>
    <Language {...props} />
  </ThemeProvider>
)

test('show initial current label', () => {
  renderCmp({ current: 'en-US', onSelect: jest.fn() })

  expect(screen.getByTestId('current-lang')).toHaveTextContent('EN')
})

test('should not see languages list', () => {
  const { queryByTestId } = renderCmp({ current: 'en-US', onSelect: jest.fn() })

  expect(queryByTestId('language-list')).toBeNull()
})

test('call onSelect with selected language', () => {
  const onSelect = jest.fn()

  renderCmp({ current: 'en-US', onSelect })

  fireEvent.click(screen.getByTestId('current-lang'))
  fireEvent.click(screen.getByTestId('pt-BR'))

  expect(onSelect).toBeCalledWith('pt-BR')
})
