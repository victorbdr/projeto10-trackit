import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";
import styled from "styled-components";
export default function Initial() {
  const { token, setToken } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleForm(event) {
    event.preventDefault();
  }
  function sendForm() {
    const body = { email, password };
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      body
    );
    promise.then((res) => {
      setToken(res.data.token);
      console.log(res.data);
      navigate("/habits");
    });
  }
  return (
    <>
      <Login>
        <img src={"./imgs/trackit.png"} alt="logo" />
        <Form onSubmit={handleForm}>
          <Input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={sendForm}>Entrar</button>
        </Form>
        <div className="toRegister">
          <Link to="/Register">Não tem uma conta? Cadastre-se!</Link>
        </div>
      </Login>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Login = styled.div`
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  button {
    background: #52b6ff;
    border-radius: 4.63636px;
    width: 303px;
    height: 45px;
  }
  img {
    margin-top: 68px;
    width: 180px;
    height: 178.38px;

    display: flex;
  }
  .toRegister {
    display: flex;
    justify-content: center;
  }
`;
const Input = styled.input`
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;
