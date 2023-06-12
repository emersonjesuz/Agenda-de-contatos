import "./sign-up.style.css";
import imageRight from "../../assets/ImagemDireita.png";
import { useEffect, useState } from "react";
import Axios from "../../connecting-API/axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { localStorageClearItem } from "../../utils/localStorage";

export default function SignUp() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [showAlert, setShowAlert] = useState("");
  const navegate = useNavigate();

  function dateFormSignUp(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function clearForm() {
    setForm({
      nome: "",
      email: "",
      senha: "",
    });
  }

  async function registerUser() {
    const { nome: name, email, senha: password } = form;
    const isFilled = !name || !email || !password;
    if (isFilled) return setShowAlert("preencha todos os campos!");
    try {
      await Axios.post("/usuarios", form);
      navegate("/sign-in");
    } catch (error) {
      setShowAlert("usuario ja existe!");
    }
  }

  useEffect(() => {
    localStorageClearItem();
  }, []);

  return (
    <div className="containerSignUp">
      <div className="boxFormSignUp">
        <div className="formSignUp">
          <div className="formSignUpHeader">
            <h2>Cadastre-se</h2>
          </div>
          <div className="formSignUpInputs">
            <input
              value={form.nome}
              name="nome"
              onChange={dateFormSignUp}
              placeholder="Nome"
              type="text"
            />
            <input
              value={form.email}
              name="email"
              onChange={dateFormSignUp}
              placeholder="E-mail"
              type="email"
            />
            <input
              value={form.senha}
              name="senha"
              onChange={dateFormSignUp}
              placeholder="Senha"
              type="password"
            />
          </div>
          <span className="showAlert">{showAlert}</span>
          <div className="formSignUpButtons">
            <button onClick={registerUser} id="register">
              CADASTRAR
            </button>
            <button onClick={clearForm} id="cancel">
              CANCELAR
            </button>
          </div>
        </div>
        <div className="redirectSignIn">
          <p>
            Já tem cadastro? <Link to={"/sign-in"}>Clique aqui!</Link>
          </p>
        </div>
      </div>
      <div
        className="boxImageRight"
        style={{ backgroundImage: `url(${imageRight})` }}
      ></div>
    </div>
  );
}
