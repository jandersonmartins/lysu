import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Loading from './Loading'

test('should render correctly', () => {
  const { container } = render(
    <ThemeProvider theme={{ colors: {} }}>
      <Loading />
    </ThemeProvider>
  )

  expect(container.firstChild).toMatchSnapshot()
})
