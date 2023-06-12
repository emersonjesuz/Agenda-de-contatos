import "./home.style.css";
import imageClose from "../../assets/btnClose.svg";
import TableContact from "../../components/tableContact/tableContatct";
import ModalDeleteContact from "../../components/modals/deleteContact/deleteContact";
import ModalContact from "../../components/modals/contact/modalContact";
import { createContext } from "react";

export default function Home() {
  const CreateContext = createContext({});
  return (
    <CreateContext.Provider value={""}>
      <div className="containerHome">
        <header>
          <div className="headerTitleBox">
            <h1>KONTACTS</h1>
          </div>
          <div className="headerBtnCloseBox">
            <img src={imageClose} alt="butão de sair" />
          </div>
        </header>
        <main>
          <div className="mainBtnAddBox">
            <button>Adicionar</button>
          </div>
          <div className="mainTableBox">
            <TableContact />
          </div>
        </main>
        {/* <ModalDeleteContact id={""} nome={""} /> */}
        {/* <ModalContact /> */}
      </div>
    </CreateContext.Provider>
  );
}
