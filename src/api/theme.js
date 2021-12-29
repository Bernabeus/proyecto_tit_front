import api from "./index";

const Theme = {
    
    themeAll: () => {
        return api.get("/themes");
    },

    theme: (id) => {
        return api.get(`themes/${id}`);
    },

    create: (data) => {
        return api.post("/themes", data);
    },

    update: (id, data) => {
        return api.put(`themes/${id}`, data);
    },
};

export default Theme;