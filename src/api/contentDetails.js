import api from "./index";

const ContentDetails = {
    
    contentsDetailsAll: () => {
        return api.get("/contentsDetails");
    },

    contentsDetails: (id) => {
        return api.get(`contentsDetails/${id}`);
    },

    create: (data) => {
        return api.post("/contentsDetails", data);
    },

    update: (id, data) => {
        return api.put(`contentsDetails/${id}`, data);
    },
    
};

export default ContentDetails;