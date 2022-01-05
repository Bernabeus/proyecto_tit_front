import api from "./index";

const ThemeDetails = {
    
    themeDetailsAll: () => {
        return api.get("/themesDetails");
    },

    themeDetails: (id) => {
        return api.get(`themesDetails/${id}`);
    },

    create: (data) => {
        return api.post("/themesDetails", data);
    },

    update: (id, data) => {
        return api.put(`themesDetails/${id}`, data);
    },
    
};

export default ThemeDetails;