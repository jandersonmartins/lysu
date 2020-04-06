import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`

const TotalItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
`

const Divisor = styled.div`
  height: 50%;
  width: .1rem;
  margin: 0 .7rem;
  background-color: ${props => props.theme.colors.defaultBorderColor};
`

export {
  ListContainer,
  TotalItemsContainer,
  Divisor
}
