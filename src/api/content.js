import api from "./index";

const Content = {
    
    contentAll: () => {
        return api.get("/contents");
    },

    content: (id) => {
        return api.get(`contents/${id}`);
    },

    create: (data) => {
        return api.post("/contents", data);
    },

    update: (id, data) => {
        return api.put(`contents/${id}`, data);
    },
    
};

export default Content;