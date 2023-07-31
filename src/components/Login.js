import React from "react";
import { useFormik } from "formik";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const onSubmit = (values) => {
  // console.log("Form Data:", values);
};
const validate = (values) => {
  // values.email values.password
  // errors.email errors.password
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length <= 1) {
    errors.name = "Enter Valid Name";
  } else {
    errors.name = "Nice to see you " + values.name;
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "Invalid Email ID";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};
// const validateSchema = Yup.object({
//   name: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid Email ID").required("Required"),
//   password:Yup.string().required("Required")
// })

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validateSchema,
    validate,
  });
  // console.log(formik.values.name)
  return (
    <div className="w-auto md:w-full h-80 rounded-2xl flex flex-col ml-2 mr-2 mx-auto mt-10">
      <div className="">
        <h2 className="text-center text-3xl font-extrabold ">Log In</h2>
        <form
          className="h-80 gap-5 flex flex-col justify-center items-center w-auto md:w-96 bg-slate-200 mx-auto rounded-2xl shadow-2xl shadow-gray-500"
          onSubmit={formik.handleSubmit}>
          <div className="flex flex-col h-20">
            <label htmlFor="name" className="text-lg">
              Name
            </label>
            <input
              className="w-64 h-10 focus:bg-green-200 rounded-md border-none"
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="off"
              // onChange={(e) => setUser({ name: e.target.value })}
              onChangeCapture={formik.handleChange}
              onBlur={formik.handleBlur}
              value={user.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="h-5 text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="flex flex-col h-20">
            <label htmlFor="name" className="text-lg">
              Email
            </label>
            <input
              className="w-64 h-10 focus:bg-green-200 rounded-md border-none"
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
              onChangeCapture={formik.handleChange}
              onChange={(e) => setUser({ email: e.target.value })}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="h-5 text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col h-20">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              className="w-64 h-10 focus:bg-green-200 rounded-md border-none"
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="off"
              onChangeCapture={formik.handleChange}
              onChange={(e) => setUser({ password: e.target.value })}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="h-5 text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="flex flex-col">
            <Link to="/">
              <button
                className="bg-green-400 rounded-md w-20 relative top-2 hover:text-green-500 hover:bg-white border border-gray-300 shadow-md hover:shadow-green-600 shadow-blue-600"
                type="submit"
                onClickCapture={() =>
                  alert(`Thank You ${formik.values.name} You Are Logged In.`)
                }
                onClick={() => setUser({ name: formik.values.name })}>
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
