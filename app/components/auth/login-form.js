"use client"

import React from 'react'

const LoginForm = () => {
  return (
    <form action="">
      <label htmlFor="email">
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="password">
        <input type="password" name="password" id="password" />
      </label>
      <LogginButton />
    </form>
  )
}

export {LoginForm}