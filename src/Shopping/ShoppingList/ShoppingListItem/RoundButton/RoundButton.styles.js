import styled from 'styled-components'

const RoundButton = styled.a`
  border-radius: 50%;
  font-size: .9rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`

export { RoundButton }
