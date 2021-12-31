import api from "./index";

const Content = {
    
    contentAll: () => {
        return api.get("/contents");
    },

    content: (id) => {
        return api.get(`contents/${id}`);
    },

    contentTheme: (theme) => {
        return api.get(`themes/${theme}/contents`);
    },

    create: (data) => {
        return api.post("/contents", data);
    },

    update: (id, data) => {
        return api.put(`contents/${id}`, data);
    },
    
};

export default Content;