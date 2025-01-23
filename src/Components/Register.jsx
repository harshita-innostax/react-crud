import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./Register.css";

const Register = () => {
  const initialValues = {
    sno: "",
    name: "",
    email: "",
    number: "",
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.sno) errors.sno = "Sno is required";
    if (!values.name) errors.name = "Name is required";
    if (!values.email) errors.email = "Email is required";
    if (!values.number) errors.number = "Number is required";
    return errors;
  };

  {
    /*const handleChange=(e) =>{
    setformState({
      ...formState,
      [e.target.name]: e.target.value});
  };*/
  }

  const handleSubmit = (formState) => {
    console.log(formState);

    if (!validateForm(formState)) return;
    onSubmit(formState);
    closemodal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closemodal();
      }}
    >
      <div className="modal">
        <Formik
          initialValues={initialValues}
          validate={validateForm}
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

              <button
                type="submit"
                className="btn"
                onClick={() => handleSubmit}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        {/*<form>
            <div className='form-grp'>
                <label htmlFor='sno' className='labelstyle'>Sno</label>
                <input name='sno' value={formState.sno} onChange={handleChange}/>
            </div>
            <div className='form-grp'>
                <label htmlFor='name' className='labelstyle'>Name</label>
                <input name='name' value={formState.name} onChange={handleChange}/>
            </div>
            <div className='form-grp'>
                <label htmlFor='email' className='labelstyle'>Email</label>
                <input name='email' value={formState.email} onChange={handleChange}/>
            </div>
            <div className='form-grp'>
                <label htmlFor='number' className='labelstyle'>Number</label>
                <input name='number' value={formState.number} onChange={handleChange}/>
            </div>
            {errors && <div className='error'>{`Please Include: ${errors}`}</div>}
            <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
        </form>*/}
      </div>
    </div>
  );
};

export default Register;
