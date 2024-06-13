'use client'
import React from 'react'

interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({error, reset}: Props) => {

    console.log('Error ', error)
  return (
    <div>
      <p>An unexpected error has occured. </p>
      <button className='btn' onClick={() => reset()}>Retry</button>
    </div>
  )
}

export default ErrorPage
