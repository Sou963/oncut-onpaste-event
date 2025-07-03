import React from "react";

export default function Usestated() {
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpass] = React.useState("");
  const submitname = (event) => {
    setname(event.target.value);
  };

  const submitemail = (event) => {
    setemail(event.target.value);
  };
  const submitpass = (event) => {
    setpass(event.target.value);
  };
  const submitallinfo = (event) => {
    console.log(name, email, password);
    event.preventDefault();
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4">Reg Form</h3>
        <form action="usestate.jsx" onSubmit={submitallinfo} className="form">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="form-control"
              required
              value={name}
              onChange={submitname}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control"
              required
              value={email}
              onChange={submitemail}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-control"
              required
              value={password}
              onChange={submitpass}
            />
          </div>
          <div className="text-end">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
