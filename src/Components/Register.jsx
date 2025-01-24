import React from "react";
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
  sno: Yup.number()
    .required("Sno. is required")
    .min(1, "Sno should be a number")
    .typeError("Sno must be a valid number")
    .positive("Sno must be a valid number"),
  name: Yup.string()
    .min(4, "Name must be at least 4 characters long")
    .required("Name is required"),
  email: Yup.string().required("email is required"),
  number: Yup.number()
    .typeError("Number must be a valid number")
    .min(10, "Number must be of 10 digits")
    .required("Number is required")
    .positive("Number must be a valid number"),
});

const Register = () => {
  const handleSubmit = (formState) => {
    console.log("Handlesubmit called");
    //console.log(formState);
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
              <label htmlFor="sno" className="labelstyle">
                Sno
              </label>
              <Field name="sno" />
              <ErrorMessage name="sno" component="div" className="error" />
            </div>

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
