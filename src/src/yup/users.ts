import * as yup from 'yup';

export const yupCreateUserInput = yup.object().shape({
  email: yup.string().email(),
  userName: yup.string().required(),
  fullName: yup.string().required(),
  password: yup.string().required(),
  userBirth: yup.string().required(),
  status: yup.boolean().required(),
  role: yup.number().required(),
  profile: yup.string().required(),
});
