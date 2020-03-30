import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: .6rem 1.2rem;
  border: .1rem solid ${props => props.theme.colors.primaryDark};
  border-radius: .3rem;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: .1;
    cursor: not-allowed;
  }
`

export { Button }
