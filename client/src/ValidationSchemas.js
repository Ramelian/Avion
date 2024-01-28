export const emailValidationSchema = {
  required: "Email is required",
  pattern: {
    value: /^\S+@\S+\.\S+$/,
    message: "Invalid email format",
  },
};

export const passwordValidationSchema = {
  required: "Password is required",
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    message:
      "Minimum eight characters, at least one letter, one number and one special character",
  },
};

export const nameValidationSchema = {
  required: "This field is required",
  minLength: {
    value: 2,
    message: "Name must be at least 2 characters long",
  },
  maxLength: {
    value: 50,
    message: "Name must be less than 50 characters long",
  },
  pattern: {
    value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
    message: "Name must contain only letters and spaces",
  },
};

export const phoneValidationSchema = {
  required: "Phone number is required",
  pattern: {
    // This is a simple regex for phone numbers, adjust it according to your needs
    value: /^\+?[0-9]{10,15}$/,
    message: "Invalid phone number",
  },
};

export const addressValidationSchema = {
  required: "Address is required",
  minLength: {
    value: 5,
    message: "Address must be at least 5 characters long",
  },
  maxLength: {
    value: 100,
    message: "Address must be less than 100 characters long",
  },
};

export const cardNumberValidationSchema = {
  required: "Card number is required",
  pattern: {
    value: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/, // Visa card regex, adjust regex for other cards
    message: "Invalid card number, must be a Visa card number",
  },
  minLength: {
    value: 13,
    message: "Card number must be at least 13 digits long",
  },
  maxLength: {
    value: 16,
    message: "Card number must be less than 16 digits long",
  },
};

export const expirationDateValidationSchema = {
  required: "Expiration date is required",
  pattern: {
    value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, // MM/YY or MM/YYYY format
    message: "Invalid expiration date, must be MM/YY or MM/YYYY format",
  },
};

export const cvvValidationSchema = {
  required: "CVV is required",
  pattern: {
    value: /^[0-9]{3,4}$/, // 3 or 4 digit CVV
    message: "Invalid CVV, must be 3 or 4 digits",
  },
};

