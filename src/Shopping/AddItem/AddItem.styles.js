import styled from 'styled-components'
import { Input as CommonInput } from '../../Input'
import { Button as CommonButton } from '../../Button'

const AddItem = styled.div`
  display: flex;
  justify-content: center;

  > button {
    margin-left: 1rem;
  }
`

const Input = styled(CommonInput)`
  width: 20rem;
  height: 3rem;
`

const Buttom = styled(CommonButton)`
  width: 8rem;
  height: 3rem;
`

export {
  AddItem,
  Input,
  Buttom
}
