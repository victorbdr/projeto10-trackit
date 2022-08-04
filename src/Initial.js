import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function Initial() {
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
      console.log(res.data);
      navigate("/habits");
    });
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <img src={"./imgs/trackit.png"} alt="logo" />
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={sendForm}>Entrar</button>
      </form>
      <Link to="/Register">Já tem uma conta? Faça login!</Link>
    </>
  );
}
