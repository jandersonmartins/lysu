import React from 'react'
import { render } from '@testing-library/react'
import Main from './Main'

test('renders correctly', () => {
  const { container } = render(
    <Main>
      <div>Somethig</div>
    </Main>
  )

  expect(container.firstChild).toMatchSnapshot()
})
