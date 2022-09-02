import {useState,useEffect} from 'react';
function validate(validations, values) {
    const errors = validations
      .map(validation => validation(values))
      .filter(validation => typeof validation === 'object');
    return {isValid: errors.length === 0, errors: errors.reduce((errors, error) => ({...errors, ...error}), {})};
  }
  
  export function useForm(initialState = {}, validations = [], onSubmit = () => {}) {
    const {isValid: initialIsValid, errors: initialErrors} = validate(validations, initialState);
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);
    const [isValid, setValid] = useState(initialIsValid);
    const [touched, setTouched] = useState({});
  
    const changeHandler = ({target: {value, name}}) => {
      const newValues = {...values, [name]: value};
      const {isValid, errors} = validate(validations, newValues);
      setValues(newValues);
      setErrors(errors);
      setValid(isValid);
      setTouched({...touched, [name]: true});
    };
  
    const submitHandler = event => {
      event.preventDefault();
      console.log(values)
      setValues({firstName: '', lastName: '', email: ''})
    };
   
    return {values, errors, touched, isValid, changeHandler, submitHandler};
  }
  
  export function isRequired(value) {
    return value != null && value.trim().length > 0;
  }
  