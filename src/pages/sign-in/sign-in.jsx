import imageLeft from "../../assets/ImagemEsquerda.png";
import "./sign-in.style.css";

export default function SignIn() {
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
            <input placeholder="E-mail" type="email" />
            <input placeholder="Senha" type="password" />
          </div>
          <div className="formSignInButton">
            <button>LOGIN</button>
          </div>
        </div>
        <div className="redirectSignUp">
          <p>
            Não tem cadastro?<span> Clique aqui!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
