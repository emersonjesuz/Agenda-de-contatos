import "./sign-up.style.css";
import imageRight from "../../assets/ImagemDireita.png";

export default function SignUp() {
  return (
    <div className="containerSignUp">
      <div className="boxFormSignUp">
        <div className="formSignUp">
          <div className="formSignUpHeader">
            <h2>Cadastre-se</h2>
          </div>
          <div className="formSignUpInputs">
            <input placeholder="Nome" type="text" />
            <input placeholder="E-mail" type="email" />
            <input placeholder="Senha" type="password" />
          </div>
          <div className="formSignUpButtons">
            <button id="register">CADASTRAR</button>
            <button id="cancel">CANCELAR</button>
          </div>
        </div>
        <div className="redirectSignIn">
          <p>
            Já tem cadastro? <span>Clique aqui!</span>
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
