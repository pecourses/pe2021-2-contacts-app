import * as yup from 'yup';

export const CONTACT_VALIDATION_SCHEMA = yup.object({
  name: yup
    .string()
    .min(2)
    .max(40)
    .matches(/^(?=.*[a-z].*)[\w \d]*$/, 'Name must contain at least 1 letter')
    .required(),
  telNumber: yup
    .string()
    .min(13)
    .max(13)
    .matches(
      /^\+380(\d){9}$/,
      'Tel numbet must matches to pattern "+380123456789"'
    )
    .required(),
  birthday: yup
    .date()
    .min('1900-01-01')
    .max(new Date()),
});
