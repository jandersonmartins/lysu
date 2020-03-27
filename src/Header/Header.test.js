import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Header from './Header'

test('renders correcty', () => {
  const { container } = render(
    <ThemeProvider theme={{ colors: {} }}>
      <Header />
    </ThemeProvider>
  )

  expect(container.firstChild).toMatchSnapshot()
})
