import { useContext, useEffect, useState } from "react";
import btnCloseX from "../../../assets/btnClose-X.svg";
import CreateContext from "../../../context/ceateContext";
import "../modalStyleGlobal/modalStyleGlobal.css";
import "./modalContact.style.css";
import Axios from "../../../connecting-API/axios";
import { localStorageClearItem } from "../../../utils/localStorage";

export default function ModalContact() {
  const { token, setShowModalContact, listDataContact, contactId } =
    useContext(CreateContext);
  const [showAlert, setShowAlert] = useState("");
  const [formContact, setFormContact] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  function dataContact(e) {
    setFormContact({
      ...formContact,
      [e.target.name]: e.target.value,
    });
  }

  async function addContact() {
    const { nome, email, telefone } = formContact;

    if (!nome || !email || !telefone)
      return setShowAlert("preencha todos os campos!");

    if (!contactId) {
      await addNewContact();
      setShowModalContact(false);
      return;
    }

    await editContact();
    setShowModalContact(false);
  }

  async function addNewContact() {
    try {
      await Axios.post("/contatos", formContact, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      localStorageClearItem();
    }
  }
  async function editContact() {
    try {
      await Axios.put(`/contatos/${contactId}`, formContact, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      localStorageClearItem();
    }
  }

  function fillOutContactForm() {
    const dataContact = listDataContact.find(
      (contact) => contact.id === contactId
    );
    setFormContact(dataContact);
  }

  useEffect(() => {
    if (contactId) fillOutContactForm();
  }, []);

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
          <input
            name="nome"
            value={formContact.nome}
            onChange={dataContact}
            placeholder="Nome"
            type="text"
          />
          <input
            name="email"
            value={formContact.email}
            onChange={dataContact}
            placeholder="Email"
            type="text"
          />
          <input
            name="telefone"
            value={formContact.telefone}
            onChange={dataContact}
            placeholder="Telefone"
            type="text"
          />
        </div>
        <span className="showAlert">{showAlert}</span>
        <div className="modalButtonsContactbox">
          <button onClick={addContact} id="btnmodalSalvarContact">
            SALVAR
          </button>
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
