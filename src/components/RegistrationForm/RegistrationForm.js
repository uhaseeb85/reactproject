import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: { email: "", clientname:"",scope:"",clientcontact:"",clientorg:"",redirecturl:""},
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Client Name</label>
      <input id="clientname" name="clientname" type="text" onChange={formik.handleChange} value={formik.values.clientname} />
      <label htmlFor="email">Scope</label>
      <input id="scope" name="scope" type="text" onChange={formik.handleChange} value={formik.values.scope} />
      <label htmlFor="email">Client Email</label>
      <input id="clientcontact" name="clientcontact" type="email" onChange={formik.handleChange} value={formik.values.clientcontact} />
      <label htmlFor="email">Client Org</label>
      <input id="clientorg" name="clientorg" type="text" onChange={formik.handleChange} value={formik.values.clientorg} />
      <label htmlFor="email">Redirect Url</label>
      <input id="redirecturl" name="redirecturl" type="text" onChange={formik.handleChange} value={formik.values.redirecturl} />
      <label htmlFor="email"></label>
      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  return <RegistrationForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default RegistrationForm;
