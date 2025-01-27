import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Redux/userReducer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Register.css";

const initialValues = {
  sno: "",
  name: "",
  email: "",
  number: "",
};

const validateSchema = Yup.object({
  name: Yup.string()
    .min(4, "Name must be at least 4 characters long")
    .typeError("Enter a Valid Name")
    .required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  number: Yup.number()
    .typeError("Number must be a valid number")
    .min(10, "Number must be of 10 digits")
    .required("Number is required")
    .positive("Number must be a valid number"),
});

const Register = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Handlesubmit called");
    dispatch(
      addUser({
        sno: users[users.length - 1].sno + 1,
        name: values.name,
        email: values.email,
        number: values.number,
      })
    );
    navigate("/");
  };

  return (
    <div className="modal">
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="form-grp">
              <label htmlFor="name" className="labelstyle">
                Name
              </label>
              <Field name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-grp">
              <label htmlFor="email" className="labelstyle">
                Email
              </label>
              <Field name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-grp">
              <label htmlFor="number" className="labelstyle">
                Number
              </label>
              <Field name="number" />
              <ErrorMessage name="number" component="div" className="error" />
            </div>

            <button type="submit" className="btn" onClick={() => handleSubmit}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
