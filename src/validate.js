const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.sex) {
    errors.sex = 'Required';
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required';
  }
  if (!values.employed1) {
    errors.employed1 = 'Required';
  }
  if (!values.employed2) {
    errors.employed2 = 'Required';
  }
  if (!values.employed3) {
    errors.employed3 = 'Required';
  }
  return errors;
};

export default validate;

// Display only one error message
// const validatePassword = (values) => {
//   let abc = values.employed1 && values.employed2 && values.employed3
//   return abc;
// };

//   if (!validatePassword(values)) {
//   errors.employed1 = 'Required';
// }