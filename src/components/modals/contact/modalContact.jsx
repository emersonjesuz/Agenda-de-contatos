import { useContext } from "react";
import btnCloseX from "../../../assets/btnClose-X.svg";
import CreateContext from "../../../context/ceateContext";
import "../modalStyleGlobal/modalStyleGlobal.css";
import "./modalContact.style.css";

export default function ModalContact() {
  const { setShowModalContact } = useContext(CreateContext);
  return (
    <div className="containerModal">
      <div className="modalContact">
        <img
          className="btnCloseX"
          src={btnCloseX}
          onClick={() => setShowModalContact(false)}
          alt="butao de sair do modal"
        />
        <div className="modalHeaderContactBox">
          <h2>Editar Contato</h2>
        </div>
        <div className="modalInputsContactBox">
          <input placeholder="Nome" type="text" />
          <input placeholder="Email" type="text" />
          <input placeholder="Telefone" type="text" />
        </div>
        <div className="modalButtonsContactbox">
          <button id="btnmodalSalvarContact">SALVAR</button>
          <button
            onClick={() => setShowModalContact(false)}
            id="btnmodalCancelarContact"
          >
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
}
