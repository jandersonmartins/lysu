import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import RemoveButton from './RemoveButton'

test('should render correctly', () => {
  const { container } = render(
    <ThemeProvider theme={{ colors: {} }} >
      <RemoveButton />
    </ThemeProvider>
  )

  expect(container.firstChild).toMatchSnapshot()
})
