import React from 'react'
import {useFormStatus} from "react-dom"

const LogginButton = () => {
  const {pending} = useFormStatus()
  return (
    <button type="submit" aria-disabled={pending}>Login</button>
  )
}

export default LogginButton