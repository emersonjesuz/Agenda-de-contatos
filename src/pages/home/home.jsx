import "./home.style.css";
import imageClose from "../../assets/btnClose.svg";
import TableContact from "../../components/tableContact/tableContatct";
import ModalDeleteContact from "../../components/modals/deleteContact/deleteContact";
import ModalContact from "../../components/modals/contact/modalContact";
import { useEffect, useState } from "react";
import {
  localStorageClearItem,
  localStorageGetItem,
} from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import CreateContext from "../../context/ceateContext";

export default function Home() {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalContact, setShowModalContact] = useState(false);
  const [contact, setContact] = useState([]);

  const navegate = useNavigate();
  const token = localStorageGetItem("token");

  function haveToken() {
    if (!token) {
      navegate("/sign-in");
    }
  }

  useEffect(() => {
    haveToken();
    console.log("ola");
  });
  return (
    <CreateContext.Provider
      value={{
        showModalContact,
        setShowModalContact,
        showModalDelete,
        setShowModalDelete,
        contact,
        setContact,
      }}
    >
      <div className="containerHome">
        <header>
          <div className="headerTitleBox">
            <h1>KONTACTS</h1>
          </div>
          <div className="headerBtnCloseBox">
            <img
              className="headerBtnClose"
              onClick={() => localStorageClearItem()}
              src={imageClose}
              alt="butão de sair"
            />
          </div>
        </header>
        <main>
          <div className="mainBtnAddBox">
            <button onClick={() => setShowModalContact(true)}>Adicionar</button>
          </div>
          <div className="mainTableBox">
            <TableContact />
          </div>
        </main>
        {showModalDelete && <ModalDeleteContact />}
        {showModalContact && <ModalContact />}
      </div>
    </CreateContext.Provider>
  );
}
