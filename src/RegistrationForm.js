import React from "react";
import useFormValidation from "./useFormValidation";
import validate from "./validate";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    town: "",
    region: "",
    zip: "",
    country: "India",
  };

  const onSubmit = () => {
    console.log("Form Submitted Successfully:", values);
    alert("Registration successful!");
  };

  const { values, errors, handleChange, handleSubmit } = useFormValidation(
    initialValues,
    validate
  );

  return (
    <div className="form-container">
      <h2 className="form-header">Register Here</h2>
      <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="form">
        {/* Email */}
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Username */}
        <div className="form-group">
          <label>Username *</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Enter username (max 4 characters)"
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label>Confirm Password *</label>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        {/* First Name */}
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        {/* Address */}
        <div className="form-group">
          <label>Address *</label>
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        {/* Town */}
        <div className="form-group">
          <label>Town *</label>
          <input
            type="text"
            name="town"
            value={values.town}
            onChange={handleChange}
            placeholder="Enter your town"
          />
          {errors.town && <p className="error">{errors.town}</p>}
        </div>

        {/* Region */}
        <div className="form-group">
          <label>Region *</label>
          <input
            type="text"
            name="region"
            value={values.region}
            onChange={handleChange}
            placeholder="Enter your region"
          />
          {errors.region && <p className="error">{errors.region}</p>}
        </div>

        {/* Zip Code */}
        <div className="form-group">
          <label>Postcode / Zip *</label>
          <input
            type="text"
            name="zip"
            value={values.zip}
            onChange={handleChange}
            placeholder="Enter your postcode or zip"
          />
          {errors.zip && <p className="error">{errors.zip}</p>}
        </div>

        {/* Country */}
        <div className="form-group">
          <label>Country *</label>
          <select
            name="country"
            value={values.country}
            onChange={handleChange}
          >
            <option>India</option>
            <option>Saudi Arabia</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Canada</option>
            <option>UAE</option>
          </select>
        </div>

        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
