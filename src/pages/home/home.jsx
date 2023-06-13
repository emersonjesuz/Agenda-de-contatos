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
  const [listDataContact, setListDataContact] = useState([]);
  const [contactId, setContactId] = useState("");

  const navegate = useNavigate();
  const token = localStorageGetItem("token");

  function showBtnAdd() {
    setContactId("");
    setShowModalContact(true);
  }

  function haveToken() {
    if (!token) {
      navegate("/sign-in");
    }
  }

  useEffect(() => {
    haveToken();
  });
  return (
    <CreateContext.Provider
      value={{
        token,
        showModalContact,
        setShowModalContact,
        showModalDelete,
        setShowModalDelete,
        listDataContact,
        setListDataContact,
        contactId,
        setContactId,
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
            <button onClick={showBtnAdd}>Adicionar</button>
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
