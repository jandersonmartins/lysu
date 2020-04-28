import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Ul = styled.ul`
  list-style: none;
  position: absolute;
  padding: .5rem;
  bottom: -3rem;
  background: #D8D8D8;
  border-radius: .2rem;
`

const Label = styled.a`
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 1.3rem;
`

export { Container, Ul, Label }
