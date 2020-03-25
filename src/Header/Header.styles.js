import styled from 'styled-components'

const Header = styled.header`
  height: 5rem;
  border-bottom: .1rem solid rgba(216, 216, 216, .7);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
`

const H1 = styled.h1`
  font-size: 2rem;
`

export { Header, H1 }
