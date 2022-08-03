import { Link } from "react-router-dom";
export default function Initial() {
  return (
    <>
      <form>
        <img src={"./imgs/trackit.png"} alt="logo" />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
      </form>
      <Link to="/Register">Já tem uma conta? Faça login!</Link>
    </>
  );
}
