import "./deleteContact.style.css";
import "../modalStyleGlobal/modalStyleGlobal.css";
import btnCloseX from "../../../assets/btnClose-X.svg";
import { useContext } from "react";
import CreateContext from "../../../context/ceateContext";
import Axios from "../../../connecting-API/axios";
import { localStorageClearItem } from "../../../utils/localStorage";

export default function ModalDeleteContact() {
  const { token, setShowModalDelete, contactId, contactName } =
    useContext(CreateContext);

  async function deleteContact() {
    try {
      Axios.delete(`/contatos/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setShowModalDelete(false);
    } catch (error) {
      localStorageClearItem();
    }
  }

  return (
    <div className="containerModal">
      <div className="ModalDeleteContactBox">
        <img
          className="btnCloseX"
          onClick={() => setShowModalDelete(false)}
          src={btnCloseX}
          alt="butao de sair do modal"
        />
        <div className="modalHeaderDeleteContact">
          <h2>Confirma a exclusão?</h2>
        </div>
        <div className="modalTextDeleteContact">
          <p>Deseja excluir o contato, {contactName}?</p>
        </div>
        <div className="modalButtonsDeleteContact">
          <button onClick={deleteContact} id="btnModalExcluir">
            EXCLUIR
          </button>
          <button
            onClick={() => setShowModalDelete(false)}
            id="btnModalCancelar"
          >
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
}
