import React, { useState } from "react";

const Form = (props) => {
  console.log("form: ", Form);

  // const defaultState = {
  //     name: "",
  //     email: "",
  //     role: ""
  //     };
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewTeamMember(form);
    setForm({ name: "", email: "", role: "" });
    console.log("form submitted!");
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={form.name}
        name="name"
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="Email"
        onChange={handleChange}
        value={form.email}
        name="email"
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        placeholder="Role"
        onChange={handleChange}
        value={form.role}
        name="role"
      />
      <button type="submit">Add Member</button>
    </form>
  );
};
export default Form;
