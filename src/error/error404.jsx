import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Error404.style.css";

export default function ErrorPage404() {
  const navegate = useNavigate();
  function redirectSignIn() {
    navegate("/sign-in");
  }

  useEffect(() => {
    setTimeout(() => {
      redirectSignIn();
    }, 4000);
  }, []);
  return (
    <div className="containerError">
      <h1>404</h1>
      <p>NOT FOUND😵</p>
      <span>vamos te redirecionar para a pagina de login</span>
    </div>
  );
}
