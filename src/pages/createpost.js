import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Createpost = () => {
  const initialVaules = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).required(),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:3001/posts/createpost", data).then((res) => {
      console.log("created");
    });
  };

  return (
    <div>
      <Link to='/'>Go Home</Link>
      <Formik
        initialValues={initialVaules}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Title</label>
          <ErrorMessage name='title' component='span' />
          <Field autoComplete='off' name='title' placeholder='enter title' />
          <label>Post</label>
          <ErrorMessage name='postText' component='span' />
          <Field autoComplete='off' name='postText' placeholder='enter title' />
          <label>Username</label>
          <ErrorMessage name='username' component='span' />
          <Field autoComplete='off' name='username' placeholder='enter title' />

          <button onClick={onSubmit} type='button'>
            Create Post
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Createpost;
