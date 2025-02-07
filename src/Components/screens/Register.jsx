import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { selectSelectedUserId } from "../../redux/user.selectors";
import { addUsers, updateUsers } from "../../redux/user.reducer";

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
    console.log("Handlesubmit called", selectedUserId);

    if (selectedUserId) {
      dispatch(
        updateUsers({
          id: selectedUserId,
          name: values.name,
          email: values.email,
          number: values.number,
        })
      ).then((res) => {
        if (res.payload) {
          navigate("/");
        }
      });
    } else {
      dispatch(
        addUsers({
          name: values.name,
          email: values.email,
          number: values.number,
        })
      ).then((res) => {
        if (res.payload) {
          navigate("/");
        }
      });
    }
  };

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="max-w-sm mx-auto">
              <div className="mb-9">
                <label
                  htmlFor="name"
                  className="block mb-2 text-xl font-semibold text-gray-900 dark:text-black"
                >
                  Name
                </label>
                <Field
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>

              <div className="mb-9">
                <label
                  htmlFor="email"
                  className="block mb-2 text-xl font-semibold text-gray-900 dark:text-black"
                >
                  Email
                </label>
                <Field
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>

              <div className="mb-9">
                <label
                  htmlFor="number"
                  className="block mb-2 text-xl font-semibold text-gray-900 dark:text-black"
                >
                  Number
                </label>
                <Field
                  name="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage
                  name="number"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>

              <button
                type="submit"
                className="flex justify-center bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-6 mt-4 rounded"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
