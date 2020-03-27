import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  width: 100vw;
  height: 5rem;
  border-bottom: .1rem solid ${props => props.theme.colors.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
`

const H1 = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.colors.white};
`

export { Header, H1 }
