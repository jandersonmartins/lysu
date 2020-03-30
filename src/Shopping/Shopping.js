import React from 'react'
import { AddItem } from './AddItem'

const Shopping = () => {
  return (
    <div>
      <AddItem onItem={console.log} />
    </div>
  )
}

export default Shopping
