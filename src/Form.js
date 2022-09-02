import { useForm, isRequired } from "./Useform";
import { useState, useEffect } from "react";
export const Form = (onSubmit) => {
    const initialState = {firstName: '', lastName: '', email: ''};
    const validations = [
      ({firstName}) => isRequired(firstName) || {firstName: 'First name is required'},
      ({lastName}) => isRequired(lastName) || {lastName: 'Last name is required'},
      ({email}) => isRequired(email) || {email: 'E-mail is required'}
    
    ]
    const {values, errors,isValid, touched, changeHandler, submitHandler} = useForm(initialState, validations, onSubmit);

	return (
        <form
        className="signup-form"
        onSubmit={submitHandler}>
        <h2>Sign up</h2>
          <div>
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              required
              value={values.firstName}
              onChange={changeHandler}/>
            {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div>
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              required
              value={values.lastName}
              onChange={changeHandler}/>
            {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              required
              value={values.email}
              onChange={changeHandler}/>
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>
          <button
          disabled={!isValid}>
          Sign up
        </button>
          </form>
	);
};
