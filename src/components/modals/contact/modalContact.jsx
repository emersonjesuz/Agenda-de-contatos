import btnCloseX from "../../../assets/btnClose-X.svg";
import "../modalStyleGlobal/modalStyleGlobal.css";
import "./modalContact.style.css";

export default function ModalContact() {
  return (
    <div className="containerModal">
      <div className="modalContact">
        <img
          className="btnCloseX"
          src={btnCloseX}
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
          <button id="btnmodalCancelarContact">CANCELAR</button>
        </div>
      </div>
    </div>
  );
}
