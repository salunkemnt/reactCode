import React, { useState } from 'react';
import '../App.css'
import {

  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  
} from '@mui/material';
import CTextField from './components/CTextField';
import CRadio from './components/CRadio';
import CCheckbox from './components/CCheckbox';
import CButton from './components/CButton';

function Index() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    gender: '',
    check:false
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    gender:'',
    check:'',
  });

  const handleChange = (e) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;
    let error = '';
  
    if (targetName === 'firstName' || targetName === 'lastName') {
      if (!/^[a-zA-Z]+$/.test(targetValue)) {
        error = 'Only letters are allowed';
      }
    } else if (targetName === 'number') {
      if (!/^[0-9]+$/.test(targetValue)) {
        error = 'Only numbers are allowed';
      }
    } else if (targetName === 'email') {
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(targetValue)) {
        error = 'Enter Valid email format';
      }
    }
  
    
      setFormErrors((prevState) => ({
        ...prevState,
        [targetName]: error
      }));
    
    setFormValues((prevState) => ({
      ...prevState,
      [targetName]: targetValue
    }));
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  //Validate Function

  const onHandleClick = () => {
    if (!formValues.firstName) {
      setFormErrors((prevState) => ({
        ...prevState,
        firstName: 'First name is required'
      }));
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        firstName: ''
      }));
    }

    if (!formValues.lastName) {
      setFormErrors((prevState) => ({
        ...prevState,
        lastName: 'Last name is required'
      }));
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        lastName: ''
      }));
    }

    if (!formValues.number) {
      setFormErrors((prevState) => ({
        ...prevState,
        number: 'Contact number is required'
      }));
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        number: ''
      }));
    }

    if (!formValues.email) {
      setFormErrors((prevState) => ({
        ...prevState,
        email: 'Email is required'
      }));
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        email: ''
      }));
    }

    if (!formValues.gender) {
      setFormErrors((prevState) => ({
        ...prevState,
        gender: 'Please select Gender'
      }));
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        gender: ''
      }));
    }
    if (!formValues.check) {
      setFormErrors((prevState) => ({
        ...prevState,
        check: 'Please Accept T&C'
      }));
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        formValues,check:true
      }));
    }
   

    if (
      !formErrors.firstName &&
      !formErrors.lastName &&
      !formErrors.number &&
      !formErrors.email &&
      !formErrors.gender &&
      !formErrors.check
    ) {
      setIsSubmitted(true);
      console.log(formValues);
    }
  };

  return (
    <div style={{border: '2px solid grey',
    width: '250px',
    height: '700px',
    padding: '50px',
    color: 'brown',
    backgroundColor: 'lightblue',
    position: 'absolute',
    left: '35%',
    top: '5%',
    marginTop:'60px',
    marginLeft:'40px'}}>

      <h1 variant="h3" sx={{ color: 'blue' }}>
        USER DETAILS:
      </h1>
      <br />

      <CTextField
        type="text"
        name="firstName"
        placeholder="Enter Last Name"
        value={formValues.firstName}
        onChange={handleChange}
        label="First Name"
        variant="filled"
        error={formErrors.firstName}
        helperText={formErrors.firstName}
        required
       />
      <br></br>
      <br></br>

      <CTextField
        type="text"
        id="lastName"
        placeholder="Enter Last Name"
        name="lastName"
        value={formValues.lastName}
        onChange={handleChange}
        label="Last Name"
        variant="filled"
        error={formErrors.lastName}
        helperText={formErrors.lastName}
        required
      />
      <br></br>
      <br></br>

      <CTextField
        type="text"
        id="email"
        placeholder="Enter Email Id"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        label="Email Id"
        variant="filled"
        error={formErrors.email}
        helperText={formErrors.email}
        required
      />
       <br></br>
      <br></br>

      <CTextField
        type="text"
        id="number"
        placeholder="Enter Mobile No"
        name="number"
        value={formValues.number}
        onChange={handleChange}
        label="Mobile No"
        variant="filled"
        error={formErrors.number}
        helperText={formErrors.number}
        required
      />
       <br></br>
      <br></br>

      <FormControl error={!!formErrors.gender}>
        <FormLabel style={{ color: 'black', fontsize: '30px', align: 'center' }}>GENDER:</FormLabel>
        <RadioGroup name='gender' value={formValues.gender} onChange={handleChange}>
          <FormControlLabel value="female" control={<CRadio />} label="Female" />
          <FormControlLabel value="male" control={<CRadio />} label="Male" />
          <FormControlLabel value="other" control={<CRadio />} label="Other" />
        </RadioGroup>
        {formErrors.gender && <p style={{ color: 'red' }}>{formErrors.gender}</p>}
      </FormControl>
      <br></br>
      
      <FormControl error={!!formErrors.check}>
        <FormGroup name='check' value={formValues.check} onChange={(e) => {
          setFormValues((prev) => ({
            ...prev,
            check: !formValues.check
          }))
          setFormErrors((prev) => ({
            ...prev,
            check: ""
          }))
        }}>
          <FormControlLabel
            control={<CCheckbox />}
            label="I agree T&C"
            sx={{ display: 'flex' }}
          />
        </FormGroup>
        {formErrors.check && <p style={{ color: 'red' }}>{formErrors.check}</p>}
      </FormControl>

       <br></br>
      <br></br>
      
      <CButton onClick={onHandleClick} variant="contained">Submit</CButton>
      <br></br>
       
  {isSubmitted && (
  <div >
    <h1>Applicant Details</h1>
    <br />
    <p>First Name: {formValues.firstName} </p>
    <br />
    <p>Last Name: {formValues.lastName}</p>
    <br />
    <p>Contact: {formValues.contact}</p>
    <br />
    <p>EmailId: {formValues.email}</p>
    <br />
    <p>Gender: {formValues.gender}</p>
  </div>
)}

    </div>
  );
}

export default Index;
