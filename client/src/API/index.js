import axios from "axios"

export default {
    saveFavorite: (payload) => {
        return axios.post("/api/favorite", payload)
    },

    getAll: (payload) => {
        return axios.post("/api/user/all", payload)
    },

    deleteSavedSearch:function(id){
        return axios.delete("/api/user/"+ id)
    }
}