import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { changeUserName } from "../public/src/app/features/formSlice";

const UserForm = () => {
  const [isFormSuccesful, setIsFormSuccesful] = useState(false);
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (values.password.length < 5) {
      errors.password = "The password must be at least 5 characters long";
    }

    return errors;
  };

  return (
    <div className="h-screen p-5 w-full md:w-1/2">
      <Head>
        <title>User Form</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 id="title" className="py-2 text-center">
        Update your User Information
      </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          setIsFormSuccesful(true);
          setTimeout(() => {
            setIsFormSuccesful(false);
          }, 3000);
          dispatch(changeUserName(values.name));
          actions.resetForm({
            values: {
              name: "",
              email: "",
              password: "",
            },
          });
        }}
        validate={validate}
      >
        <Form
          style={{ border: "0.5px solid #D2D1CD" }}
          className="flex flex-col gap-5 p-3 rounded-md bg-gray bg-white py-8"
        >
          <Field
            name="name"
            id="name"
            type="text"
            className="rounded-md p-2 bg-gray-100"
            placeholder="Name"
          />
          <Field
            name="email"
            id="email"
            type="email"
            className="rounded-md p-2 bg-gray-100"
            placeholder="Email"
          />
          <Field
            name="password"
            id="password"
            type="password"
            className="rounded-md p-2 bg-gray-100"
            placeholder="Password"
          />
          <ErrorMessage name="password">
            {(msg) => <h1 className="text-red-600 text-center">{msg}</h1>}
          </ErrorMessage>
          <button
            id="update"
            className="bg-blue-800 rounded-md shadow-md items-center text-white p-2"
            type="submit"
          >
            Update
          </button>
          {isFormSuccesful && (
            <h1 className="text-green-500 text-center">
              User information updated succesfully!
            </h1>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
