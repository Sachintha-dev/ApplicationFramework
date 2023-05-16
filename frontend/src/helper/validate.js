import toast from "react-hot-toast";

export async function emailValidate(values) {
  const error = emailVerify({}, values);

  return error;
}
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email is required");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Email can't contain space");
  }
}

function passwordVerify(errors = {}, values) {
  /* eslint-disable no-useless-escape */
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password Required...!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password...!");
  } else if (values.password.length < 4) {
    errors.password = toast.error(
      "Password must be more than 4 characters long"
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special character");
  }

  return errors;
}
