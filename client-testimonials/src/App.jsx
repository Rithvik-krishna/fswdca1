// App.jsx
import './App.css'
import TestimonialCard from './components/TestimonialCard'

function App() {
  const testimonials = [
    {
      name: "Emily Watson",
      review: "This service was amazing! Highly recommended."
    },
    {
      name: "John Doe",
      review: "Great experience, very professional and friendly staff."
    }
  ]

  return (
    <>
      <h1>Customer Testimonials</h1>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} name={testimonial.name} review={testimonial.review} />
      ))}
    </>
  )
}

export default App
