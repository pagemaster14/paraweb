import options from "./config.js";

class MainApi {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    getInitialCards() {
        return fetch(`${this._url}`, {
            headers: this._headers,
        })
            .then(this._checkResponse)

    }
}



const mainApi = new MainApi(options);
export default mainApi;