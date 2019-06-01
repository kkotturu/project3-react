import axios from "axios"

export default {
    saveFavorite: (payload) => {
        return axios.post("/save/favorite", payload)
    }
}