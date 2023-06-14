import "./tableContact.style.css";
import imageEdit from "../../assets/btnEdit.svg";
import imageTrash from "../../assets/btnTrash.svg";
import { useContext, useEffect, useState } from "react";
import CreateContext from "../../context/ceateContext";
import Axios from "../../connecting-API/axios";
import { localStorageClearItem } from "../../utils/localStorage";

export default function TableContact() {
  const {
    token,
    setShowModalContact,
    setShowModalDelete,
    listDataContact,
    setListDataContact,
    setContactId,
    setContactName,
  } = useContext(CreateContext);

  async function listContact() {
    try {
      const list = await Axios.get("/contatos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setListDataContact(list.data);
    } catch (error) {
      localStorageClearItem();
    }
  }

  function showDelete(dataList) {
    setContactName(dataList.nome);
    setContactId(dataList.id);
    setShowModalDelete(true);
  }

  useEffect(() => {
    listContact();
  }, [listDataContact]);
  return (
    <>
      <div className="tableHeaderBox">
        <span>Nome</span>
        <span>Email</span>
        <span>Telefone</span>
      </div>
      {listDataContact.map((dataList) => (
        <div key={dataList.id} className="tableItemBox">
          <span>{dataList.nome}</span>
          <span>{dataList.email}</span>
          <span>{dataList.telefone}</span>
          <div>
            <img
              onClick={() => {
                setContactId(dataList.id);
                setShowModalContact(true);
              }}
              src={imageEdit}
              alt="butao de edicão"
            />
            <img
              onClick={() => showDelete(dataList)}
              src={imageTrash}
              alt="butao de apagar"
            />
          </div>
        </div>
      ))}
    </>
  );
}
