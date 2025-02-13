import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../Redux/user.reducer";
import { selectSelectedUserId } from "../Redux/user.selectors";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedUserId = useSelector(selectSelectedUserId);

  const handleSubmit = (values) => {
    console.log("Handlesubmit called");
    console.log(selectedUserId);
    if (selectedUserId) {
      dispatch(
        updateUser({
          sno: selectedUserId,
          name: values.name,
          email: values.email,
          number: values.number,
        })
      );
    } else {
      dispatch(
        addUser({
          sno: uuid(),
          name: values.name,
          email: values.email,
          number: values.number,
        })
      );
    }
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

            <button type="submit" className="btn">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
