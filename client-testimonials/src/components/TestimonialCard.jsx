import React from 'react'

function TestimonialCard({ name, review }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Review: {review}</p>
    </div>
  )
}

export default TestimonialCard