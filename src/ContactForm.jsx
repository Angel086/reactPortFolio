import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xvgakpgl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className='email'>
    <form className="eForm"onSubmit={handleSubmit} >
      <label id="eTitle" htmlFor="email" style={{color:"smokewhite"}}>
        Postal Service
      </label>
      <input 
        style={{color:"black"}}
        id="email"
        type="email" 
        name="email"
        placeholder='yourEmail@someSite.com'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Hey so and so, I am so and so, reaching out.....'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button id="eButton"type="submit" style={{color:"black"}} disabled={state.submitting}>
        Submit
      </button>
      <Link to="/" style={{color:"smokewhite",marginTop: '1fr', display: 'block'}}>Home Page</Link>
  
    </form>
    </div>
  );
}