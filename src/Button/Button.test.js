import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Button from './Button'

test('renders correctly', () => {
  const { container } = render(
    <ThemeProvider theme={{ colors: {} }}>
      <Button>Click</Button>
    </ThemeProvider>
  )

  expect(container.firstChild).toMatchSnapshot()
})
