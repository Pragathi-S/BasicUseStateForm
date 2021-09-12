import React, { useState } from "react";
import "./style.css";

export default function App() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleFirstName = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };

    const handleLastName = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            lastName: event.target.value,
        }));
    };
    
    const handleEmail = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.firstName && values.lastName && values.email) {
            setValid(true);
        }
        setSubmitted(true);
        }

  return (
    <div class="form-container">
    <h4 class="title">Basic form using UseState</h4>
      <form class='register-form' onSubmit={handleSubmit}>
        {submitted && values.firstName && values.lastName && values.email && <div class='success-message'>Thank you for registering !</div>}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName} 
          onChange={handleFirstName}
        />
        {submitted && !values.firstName && <span id='first-name-error'>Enter a first name !</span>}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastName}
        />
        {submitted && !values.lastName && <span id='last-name-error'>Enter a last name !</span>}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmail}
        />
        {submitted && !values.email && <span id='email-error'>Enter an email address !</span>}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
      
    </div>
  );
}