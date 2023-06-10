import "./deleteContact.style.css";
import "../modalStyleGlobal/modalStyleGlobal.css";
import btnCloseX from "../../../assets/btnClose-X.svg";

export default function ModalDeleteContact({ id, nome }) {
  return (
    <div className="containerModal">
      <div className="ModalDeleteContactBox">
        <img
          className="btnCloseX"
          src={btnCloseX}
          alt="butao de sair do modal"
        />
        <div className="modalHeaderDeleteContact">
          <h2>Confirma a exclusão?</h2>
        </div>
        <div className="modalTextDeleteContact">
          <p>Deseja excluir o contato,{"Daniel Lopes"}?</p>
        </div>
        <div className="modalButtonsDeleteContact">
          <button id="btnModalExcluir">EXCLUIR</button>
          <button id="btnModalCancelar">CANCELAR</button>
        </div>
      </div>
    </div>
  );
}
