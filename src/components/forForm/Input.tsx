import React from 'react'

type Props = {}

const Input = (props: Props) => {
  return (
      <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
    </div>
  )
}

export default Input