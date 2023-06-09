import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api-contacts.pedagogico.cubos.academy",
  timeout: 10000,
  headers: { "Contente-Type": "application/json" },
});

export default Axios;
