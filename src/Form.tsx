import { ChangeEvent, Dispatch, useState } from "react";
import "./App.css";

function Form({
  setLoged,
}: {
  setLoged: Dispatch<React.SetStateAction<boolean>>;
}) {
  const [user, setUser] = useState({ username: "", password: "" });

  const onSubmit = () => {
    const { username, password } = user;
    if (username === "admin" && password === "123") {
      setLoged(true);
    }
  };

  const onChange = (
    ev: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUser((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <img src={"example.png"} />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        value={user.username}
        name="username"
        placeholder="Username"
        onChange={onChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        value={user.password}
        onChange={onChange}
        placeholder="Password"
        type="password"
      />
      <button type="submit" id="login-button" style={{ marginTop: 20 }}>
        Log in
      </button>
    </form>
  );
}

export default Form;
