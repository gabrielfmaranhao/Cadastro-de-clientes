import axios from "axios";
const token = localStorage.getItem("@Cadastro_clientes: token")
const api = axios.create({
    baseURL: "http://localhost:3001/api/",
    headers: {
        Authorization: `Bearer ${token}`
    },
    timeout: 3000
})
export default api