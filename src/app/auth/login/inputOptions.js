export const inputConfig = [
  {
    name: "email",
    id: "email",
    type: "email",
    placeholder: "Email address",
    errorMessage: "",
    required: true,
    label: "Email address",
    validationOptions: {
      required: {
        value: true,
        message: `Email address is required`,
      },
    },
  },
  {
    name: "password",
    id: "password",
    type: "password",
    placeholder: "Your password",
    errorMessage: "",
    required: true,
    label: "Password",
    validationOptions: {
      required: {
        value: true,
        message: `Your password is required`,
      },
      minLength: {
        value: 4,
        message: `Password format is invalid`,
      },
    },
  },
];
