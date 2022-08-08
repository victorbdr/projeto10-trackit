import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
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
      <Form onSubmit={handleForm}>
        <img src={"./imgs/trackit.png"} />
        <Input
          type="text"
          placeholder="E-mail"
          name="email"
          onChange={handleForm}
          value={newUser.email}
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleForm}
          value={newUser.password}
        />
        <Input
          type="text"
          placeholder="nome"
          name="name"
          onChange={handleForm}
          value={newUser.name}
        />
        <Input
          type="url"
          placeholder="foto"
          name="image"
          onChange={handleForm}
          value={newUser.image}
        />
        <button type="submit" onClick={sendForm}>
          Cadastrar
        </button>
        <Link to="/">
          <p> Já tem uma conta? Faça login!</p>
        </Link>
      </Form>
    </>
  );
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63636px;
  }
`;
const Input = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;
