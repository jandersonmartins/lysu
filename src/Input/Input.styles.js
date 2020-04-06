import styled, { css } from 'styled-components'

const BaseStyles = css`
  border: 1px solid #D8D8D8;
  border-radius: .3rem;
  outline: none;
  padding: .5rem 1.2rem;
`

const Input = styled.input`
  ${BaseStyles}
`

export { Input, BaseStyles }
