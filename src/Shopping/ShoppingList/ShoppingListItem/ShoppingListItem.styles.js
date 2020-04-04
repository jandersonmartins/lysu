import styled from 'styled-components'
import { Input as CommonInput } from '../../../Input'

const Li = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 2rem;
  border: .1rem solid #D8D8D8;
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
`

const Span = styled.span`
  font-size: 1.6rem;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
`

const BottomDivisor = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`

const Input = styled(CommonInput)`
  width: 100%;
`

export {
  Li,
  Top,
  Span,
  Bottom,
  BottomDivisor,
  Input
}
