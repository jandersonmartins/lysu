import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import TotalItems from './TotalItems'

test('renders correctly', () => {
  const { container } = render(
    <ThemeProvider theme={{ colors: {} }}>
      <TotalItems items={[{ name: 'Beans' }]} />
    </ThemeProvider>
  )

  expect(container.firstChild).toMatchSnapshot()
})
