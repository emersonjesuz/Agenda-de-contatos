import "./tableContact.style.css";
import imageEdit from "../../assets/btnEdit.svg";
import imageTrash from "../../assets/btnTrash.svg";
import { useContext } from "react";
import CreateContext from "../../context/ceateContext";

export default function TableContact() {
  const { setShowModalContact, setShowModalDelete } = useContext(CreateContext);
  return (
    <>
      <div className="tableHeaderBox">
        <span>Nome</span>
        <span>Email</span>
        <span>Telefone</span>
      </div>
      <div className="tableItemBox">
        <span>Claudia M. Sousa</span>
        <span>claudia@teste.com.br</span>
        <span>(99)9999-9999</span>
        <div>
          <img
            onClick={() => setShowModalContact(true)}
            src={imageEdit}
            alt="butao de edicão"
          />
          <img
            onClick={() => setShowModalDelete(true)}
            src={imageTrash}
            alt="butao de apagar"
          />
        </div>
      </div>
    </>
  );
}
