import api from "./index";

const User = {
    register: (userData) => {
        return api.post("/register", {
            ...userData,
        });

    },

    login: (data) => {
        return api.post("/login", data);
    },

    logout: () => {
        return api.post("/logout");
    },

    getAuthenticatedUser: () => {
        return api.get("/user");
    },

    update: (id, data) => {
        return api.put(`users/${id}`, data);
    },
};

export default User;