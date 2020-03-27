import React from 'react'
import { render } from '@testing-library/react'
import Link from './Link'

test('renders correctly', () => {
  const { container } = render(<Link href="/">Home</Link>)

  expect(container.firstChild).toMatchSnapshot()
})
