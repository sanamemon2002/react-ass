export default function validate(values) {
    let errors = {};
  
    // Email Validation
    if (!values.email) {
      errors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address.";
    }
  
    // Username Validation
    if (!values.username) {
      errors.username = "Username is required.";
    } else if (values.username.length > 4) {
      errors.username = "Username must be 4 characters or less.";
    }
  
    // Password Validation
    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
  
    // Confirm Password
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match.";
    }
  
    // First Name
    if (!values.firstName) {
      errors.firstName = "First Name is required.";
    }
  
    // Last Name
    if (!values.lastName) {
      errors.lastName = "Last Name is required.";
    }
  
    // Phone Number
    if (!values.phone) {
      errors.phone = "Phone Number is required.";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone Number must be 10 digits.";
    }
  
    // Address
    if (!values.address) {
      errors.address = "Address is required.";
    }
  
    // Town
    if (!values.town) {
      errors.town = "Town is required.";
    }
  
    // Region
    if (!values.region) {
      errors.region = "Region is required.";
    }
  
    // Zip Code
    if (!values.zip) {
      errors.zip = "Zip Code is required.";
    }
  
    return errors;
  }
  