import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function Register() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  function handleForm(event) {
    console.log(event.target.name, event.target.value);
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
    console.log(newUser);
    event.preventDefault();
  }
  function sendForm() {
    console.log("cliquei");
    const body = {
      ...newUser,
    };
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      body
    );
    promise.then((res) => {
      navigate("/");
      console.log("deu certo");
      promise.catch((error) => console.log(error.response));
    });
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <img src={"./imgs/trackit.png"} />
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          onChange={handleForm}
          value={newUser.email}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleForm}
          value={newUser.password}
        />
        <input
          type="text"
          placeholder="nome"
          name="name"
          onChange={handleForm}
          value={newUser.name}
        />
        <input
          type="photo"
          placeholder="foto"
          name="image"
          onChange={handleForm}
          value={newUser.image}
        />
        <button type="submit" onClick={sendForm}>
          Cadastrar
        </button>
      </form>
    </>
  );
}
