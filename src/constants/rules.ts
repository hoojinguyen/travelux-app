const SignInForm = {
  email: {
    required: {
      value: true,
      message: 'field is required',
    },
    minLength: {
      value: 15,
      message: 'min length is 15',
    },
  },
  password: {
    required: {
      value: true,
      message: 'field is required',
    },
    minLength: {
      value: 6,
      message: 'min length is 6',
    },
  },
};

const SignUpForm = {
  ...SignInForm,
  displayName: {
    required: {
      value: true,
      message: 'field is required',
    },
    minLength: {
      value: 3,
      message: 'min length is 3',
    },
  },
};

export default {
  SignInForm,
  SignUpForm,
};
