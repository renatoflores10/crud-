import axios from "axios";

const API_URL = "http://localhost:3001/registro";

export const listarRegistroService = async () => {
    let res = await axios.get(`${API_URL}/listar`);
    return res;
}

export const guardarRegistroService = async (datos) => {
    let res = await axios.post(`${API_URL}/guardar`, datos);
    return res;
}

export const mostrarRegistroService = async (id) => {
    let res = await axios.get(`${API_URL}/detalle/${id}`);
    return res;
}

export const editarRegistroService = async (datos) => {
    let res = await axios.put(`${API_URL}/editar/${datos.id}`, datos);
    return res;
}

export const eliminarRegistroService = async (id) => {
    let res = await axios.delete(`${API_URL}/eliminar/${id}`);
    return res;
}
