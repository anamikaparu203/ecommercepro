// import React, { useState } from "react";
// import "../styles/AdminRegistrationForm.css"; // Import the styling

// const AdminRegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     pincode: "",
//     govtId: "",
//     businessLicense: "",
//     gstNumber: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     console.log("Form Submitted", formData);
//     // Add API call or form submission logic here
//   };

//   return (
//     <div className="register-container">
//       <h1>Admin Registration</h1>
//       <form className="register-form" onSubmit={handleSubmit}>
//         {/* Name */}
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//           required
//         />

//         {/* Email */}
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//           required
//         />

//         {/* Phone Number */}
//         <label htmlFor="phoneNumber">Phone Number:</label>
//         <input
//           type="tel"
//           id="phoneNumber"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           placeholder="Enter your phone number"
//           required
//         />

//         {/* Address */}
//         <label htmlFor="address">Address:</label>
//         <textarea
//           id="address"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           placeholder="Enter your address"
//           rows="3"
//           required
//         ></textarea>

//         {/* Pincode */}
//         <label htmlFor="pincode">Pincode:</label>
//         <input
//           type="text"
//           id="pincode"
//           name="pincode"
//           value={formData.pincode}
//           onChange={handleChange}
//           placeholder="Enter your pincode"
//           required
//         />

//         {/* Government ID */}
//         <label htmlFor="govtId">Government ID:</label>
//         <input
//           type="text"
//           id="govtId"
//           name="govtId"
//           value={formData.govtId}
//           onChange={handleChange}
//           placeholder="Enter your government ID"
//           required
//         />

//         {/* Business License */}
//         <label htmlFor="businessLicense">Business License:</label>
//         <input
//           type="text"
//           id="businessLicense"
//           name="businessLicense"
//           value={formData.businessLicense}
//           onChange={handleChange}
//           placeholder="Enter your business license"
//           required
//         />

//         {/* GST Number */}
//         <label htmlFor="gstNumber">GST Number:</label>
//         <input
//           type="text"
//           id="gstNumber"
//           name="gstNumber"
//           value={formData.gstNumber}
//           onChange={handleChange}
//           placeholder="Enter your GST number"
//           required
//         />

//         {/* Password */}
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Enter your password"
//           required
//         />

//         {/* Confirm Password */}
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           placeholder="Confirm your password"
//           required
//         />

//         {/* Submit Button */}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default AdminRegistrationForm;





import React, { useState } from "react";
import "../styles/AdminRegistrationForm.css";


const AdminRegisterForm = () => {
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    pincode: "",
    govtId: "",
    businessLicense: "",
    gstNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormField({name,value}))
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Implement actual form submission logic
    
  };

  return (
    <div className="register-container">
      <h1>Admin Registration</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Name </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Phone Number </label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label>Address </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          required
        ></textarea>

        <label>Pincode </label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="Enter your pincode"
          required
        />

        <label>Government ID </label>
      
        <select
          name="govtIdType"
          value={formData.govtIdType}
          onChange={handleChange}
          required
        >
          <option value="">Select ID Type</option>
          <option value="pan">Pan Card</option>
          <option value="aadhaar">Aadhaar Number</option>
          <option value="drivingLicense">Driving License</option>
        </select>

        {/* Conditional Rendering of Government ID Input */}
        {formData.govtIdType === "pan" && (
          <>
            <label>Pan Number</label>
            <input
              type="text"
              name="govtId"
              value={formData.govtId}
              onChange={handleChange}
              placeholder="Enter your PAN Number"
              required
            />
          </>
        )}

        {formData.govtIdType === "aadhaar" && (
          <>
            <label>Aadhaar Number</label>
            <input
              type="text"
              name="govtId"
              value={formData.govtId}
              onChange={handleChange}
              placeholder="Enter your Aadhaar Number"
              required
            />
          </>
        )}

        {formData.govtIdType === "drivingLicense" && (
          <>
            <label>Driving License</label>
            <input
              type="text"
              name="govtId"
              value={formData.govtId}
              onChange={handleChange}
              placeholder="Enter your Driving License Number"
              required
            />
          </>
        )}



        <label>Business License </label>
        <input
          type="file"
          name="businessLicense"
          value={formData.businessLicense}
          onChange={handleChange}
          placeholder="Enter your business license"
          required
        />

        <label>GST Number </label>
        <input
          type="text"
          name="gstNumber"
          value={formData.gstNumber}
          onChange={handleChange}
          placeholder="Enter your GST number"
          required
        />

        <label>Password </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <label>Confirm Password </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegisterForm;