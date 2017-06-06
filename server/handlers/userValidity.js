  /**
   * Checks to make sure email is valid
   *
   * @param {String}
   * @returns bool
   */

const validEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

  /**
   * Ensures there are not blank form fields
   *
   * @param {Object} request
   * @returns bool
   */

export const allFormFieldsFilledIn = request => {
  for (const field in request) {
    if (request[field] === '') {
      return false;
    }
  }
  return true;
};

  /**
   * Ensures password meets the requirements: 1 symbol, 1 digit, 6 characters
   *
   * @param {String}
   * @returns bool
   */

 const passwordMeetsRequirements = password => {
  const symbol = /[$-/:-?{-~!"^_`\[\]]/;
  const digit = /\d+/g;

  if (password.length < 6) {
    return false;
  } else if (!password.match(digit)) {
    return false;
  } else if (!password.match(symbol)) {
    return false;
  }
  return true;
};

  /**
   * Ensures all sign up requirements were met
   *
   * @param {Object} request}
   * @returns {*}
   */

export const signUpValidity = (user) => {
  const { password, email, confirmedPassword } = user;

  if (!user) {
    return {
      isInvalid: true,
      status: 400,
      message: 'User information is missing.'
    };
  }

  if (!allFormFieldsFilledIn(user)) {
     return {
      isInvalid: true,
      status: 422,
      message: 'All fields are required.'
    };
  }

  if (!validEmail(email)) {
    return {
      isInvalid: true,
      status: 422,
      message: 'A valid email address is required.'
    };
  }

  if (password !== confirmedPassword) {
    return {
      isInvalid: true,
      status: 422,
      message: 'Passwords do not match.'
    };
  }

  if (!passwordMeetsRequirements(password)) {
     return {
      isInvalid: true,
      status: 422,
      message: 'Passwords must contain 6 characters, including 1 number and 1 symbol.'
    };
  }

  return {
    isInvalid: false
  };
};

