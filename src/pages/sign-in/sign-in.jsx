import "./sign-in.style.css";
import imageLeft from "../../assets/ImagemEsquerda.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "../../connecting-API/axios";
import {
  localStorageClearItem,
  localStorageSetItem,
} from "../../utils/localStorage";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });
  const [showAlert, setShowAlert] = useState("");
  const navegate = useNavigate();

  function dataFormSignIn(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function submitUser() {
    const { email, senha } = form;
    if (!email || !senha) return setShowAlert("preencha todos os campos!");
    try {
      const dataUser = await Axios.post("/login", form);
      localStorageSetItem("token", dataUser.data.token);
      navegate("/home");
    } catch (error) {
      setShowAlert(error.response.data);
    }
  }

  useEffect(() => {
    localStorageClearItem();
  }, []);

  return (
    <div className="containerSignIn">
      <div
        className="boxImageLerft"
        style={{ backgroundImage: `url(${imageLeft})` }}
      ></div>
      <div className="boxFormSignIn">
        <div className="formSignIn">
          <div className="formSignInHeader">
            <span>Bem vindo</span>
            <h1>Faça o login com sua conta</h1>
          </div>
          <div className="formSignInInputs">
            <input
              name="email"
              onChange={dataFormSignIn}
              placeholder="E-mail"
              type="email"
            />
            <input
              name="senha"
              onChange={dataFormSignIn}
              placeholder="Senha"
              type="password"
            />
          </div>
          <span className="showAlert">{showAlert}</span>
          <div className="formSignInButton">
            <button onClick={submitUser}>LOGIN</button>
          </div>
        </div>
        <div className="redirectSignUp">
          <p>
            Não tem cadastro?<Link to={"/sign-up"}> Clique aqui!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
