import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles.css";

// Formik uses the context API to pass form state and handling functions to child components. 

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {

       /*  the submit logic comes here */
        console.log(values);
        
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
        
      <LoginFormContent />
    </Formik>
  );
};

const LoginFormContent = ({ isSubmitting }) => {
    return (
      <Form className="login-form">
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className="error-message" />
        </div>
  
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className="error-message" />
        </div>
  
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    );
  };

export default LoginForm;
