import React, { Suspense } from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import './i18n'
import App from './App'

test('renders learn react link', async () => {
  render(
    <ThemeProvider theme={{ colors: {} }}>
      <Suspense fallback={<div />}>
        <App />
      </Suspense>
    </ThemeProvider>
  )

  await waitFor(() => expect(screen.getByText(/lysu/i)).toBeInTheDocument())
})
