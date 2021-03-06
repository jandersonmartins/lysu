import styled from 'styled-components'
import CurrencyInput from 'react-currency-input'
import { BaseStyles } from '../../../Input'

const Li = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: .1rem solid ${props => props.theme.colors.defaultBorderColor};
  border-radius: .3rem;

  margin: 1rem 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: .1rem solid ${props => props.theme.colors.defaultBorderColor};
  cursor: pointer;
`

const Span = styled.span`
  font-size: 1.6rem;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`

const HandlersSection = styled.div`
  display: flex;
  padding: 1rem;
`

const Handlers = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`

const Quantity = styled(Span)`
  margin: 0 .5rem;
`

const Input = styled(CurrencyInput)`
  width: 100%;
  ${BaseStyles}
`

export {
  Li,
  Top,
  Span,
  Bottom,
  HandlersSection,
  Handlers,
  Quantity,
  Input
}
