import "./SignUp.scss";
import { useState } from "react";

function SignUp() {
  const INITIAL = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(INITIAL);
  const handleChange = (e) => {
    setUser((prev) => (prev = { ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4321/api/users/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        credentials: "include",
      },
    })
      .then((response) => response.json())
      .then((json) => setUser(INITIAL));
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="E-mail"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button>LogIn</button>
    </form>
  );
}

export default SignUp;
