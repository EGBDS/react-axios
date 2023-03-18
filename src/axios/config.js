import axios from "axios";

const blogfetch = axios.create ({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json", //pode se enviar qualquer coisas para se comunicar com o servidor pelo cabeçalho.
    }
}); //padronizando a url, para facil manutenção no futuro

export default blogfetch;