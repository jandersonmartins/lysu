import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Totals from './Totals'

test('renders correctly', () => {
  const { container } = render(
    <ThemeProvider theme={{ colors: {} }}>
      <Totals label="Items" value="20" />
    </ThemeProvider>
  )

  expect(container.firstChild).toMatchSnapshot()
})
