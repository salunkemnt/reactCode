// import React, { useState } from 'react';
// import '../App.css';
// import {
//   Typography,
//   Button,
//   FormGroup,
//   FormControlLabel,
//   Box,
//   FormControl,
//   FormLabel,
//   RadioGroup
// } from '@mui/material';
// import CTextField from './components/CTextField';
// import CRadio from './components/CRadio';
// import CCheckbox from './components/CCheckbox';


// function Index() {
//   const [firstName, setFirstName] = useState('');
//   const [firstNameError, setFirstNameError] = useState(false);

//   const handleFirstNameChange = (e) => {
//     const value = e.target.value;
//     const firstNameregex = /^[a-zA-Z]+$/g;
//     setFirstName(value);

//     if (!firstNameregex.test(value)) {
//       setFirstNameError(true);
//     } else {
//       setFirstNameError(false);
//     }
//   };

//   const [lastName, setLastName] = useState('');
//   const [lastNameError, setLastNameError] = useState(false);

//   const handleLastNameChange = (e) => {
//     const value = e.target.value;
//     setLastName(value);

//     const lastNameregex = /^[a-zA-Z]*$/g;
//     if (!lastNameregex.test(value)) {
//       setLastNameError(true);
//     } else {
//       setLastNameError(false);
//     }
//   };

//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState(false);

//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     setEmail(value);
//     setEmailError(false);

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
//     if (!emailRegex.test(value)) {
//       setEmailError(true);
//     }
//   };

//   const [number, setNumber] = useState('');
//   const [numberError, setNumberError] = useState(false);

//   const handleNumberChange = (e) => {
//     const value = e.target.value;
//     setNumber(value);
//     setNumberError(false);

//     const numberRegex = /^[0-9]+$/g;
//     if (!numberRegex.test(value)) {
//       setNumberError(true);
//     }
//   };

//   const [gender, setGender] = useState('');

//   const handleGenderChange = (e) => {
//     setGender(e.target.value);
//   };

//   const [acceptTerms, setAcceptTerms] = useState(false);

//   const handleAcceptTermsChange = (e) => {
//     setAcceptTerms(e.target.checked);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({
//       firstName,
//       lastName,
//       email,
//       number,
//       gender,
//       acceptTerms,
//     });
//   };

//   return (
//     <div className="formdesign">
//         <h2>USER DETAILS</h2>     
//           <br />
//           <CTextField
//             type="text"
//             id="firstName"
//             placeholder="Enter First Name"
//             value={firstName}
//             onChange={handleFirstNameChange}
//             label="First Name"
//             variant="filled"
//             required
//             error={firstNameError}
//             helperText={firstNameError ? 'Please enter a valid first name' : ''}
//           />
//           <br />

//           <CTextField
//             type="text"
//             id="lastName"
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChange={handleLastNameChange}
//             label="Last Name"
//             variant="filled"
//             required
//             error={lastNameError}
//             helperText={lastNameError ? 'Please enter a valid last name' : ''}
//           />
//           <br />

//           <CTextField
//             type="email"
//             id="email"
//             placeholder="Enter Email Id"
//             value={email}
//             onChange={handleEmailChange}
//             label="Email Id"
//             variant="filled"
//             required
//             error={emailError}
//             helperText={emailError ? 'Please enter a valid email address' : ''}
//           />
//           <br />

//           <CTextField
//             type="text"
//             id="number"
//             placeholder="Enter Mobile No"
//             value={number}
//             onChange={handleNumberChange}
//             label="Mobile No"
//             variant="filled"
//             required
//             error={numberError}
//             helperText={numberError ? 'Please enter only numbers' : ''}
//           />
//           <br />

//           <FormControl sx={{ margin: '10px' }}>
//             <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//             <RadioGroup
//               aria-label="gender"
//               name="gender"
//               value={gender}
//               onChange={handleGenderChange}
//               required
//             >
//               <FormControlLabel
//                 value="female"
//                 control={<CRadio />}
//                 label="Female"
//               />
//               <FormControlLabel
//                 value="male"
//                 control={<CRadio />}
//                 label="Male"
//               />
//               <FormControlLabel
//                 value="other"
//                 control={<CRadio />}
//                 label="Other"
//               />
//             </RadioGroup>
//           </FormControl>

//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             minHeight="2vh"
//           >
//             <FormGroup>
//               <FormControlLabel
//                 checked={acceptTerms}
//                 onChange={handleAcceptTermsChange}
//                 required
//                 control={<CCheckbox />}
//                 label="I Agree T&C"
//                 sx={{ display: 'flex' }}
//               />
//             </FormGroup>
//             <br />
//           </Box>

//           <Button
//             type="submit"
//             variant="contained"
//             color="success"
//             onSubmit={handleSubmit}
//             sx={{
//               margin: '10px',
//               color: '#004236',
//               textColor: 'White',
//             }}
//           >
//             Submit
//           </Button>
//           <br />

    

//       {/* <div id="ssb">
//         <h1>Applicant Details</h1>
//         <br />
//         <p>Name: {firstName} {lastName}</p>
//         <br />
//         <p>EmailId: {email}</p>
//         <br />
//         <p>Gender: {gender}</p>
//       </div> */}
//     </div>
//   );
// }

// export default Index;
