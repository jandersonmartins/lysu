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

const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
`

const BottomDivisor = styled.div`
  width: 50%;
`

const Input = styled(CommonInput)`
  width: 100%;
`

export {
  Li,
  Bottom,
  BottomDivisor,
  Input
}
